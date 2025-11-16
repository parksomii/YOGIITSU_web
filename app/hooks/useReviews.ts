"use client";

import { useState, useEffect, useCallback } from "react";
import { ReviewData, PaginationInfo } from "../types/review";
import { API_BASE_URL } from "../config/api";

const DEFAULT_PAGE_SIZE = 6;

export const useReviews = (
  page: number = 1,
  limit: number = DEFAULT_PAGE_SIZE
) => {
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: 1,
    totalPages: 1,
    totalCount: 0,
    limit: DEFAULT_PAGE_SIZE,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = useCallback(
    async (pageNum: number = page, pageSize: number = limit) => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          `${API_BASE_URL}/reviews?page=${pageNum}&limit=${pageSize}`
        );

        if (!response.ok) {
          // 백엔드 연결 실패 시 전체 데이터를 가져와서 클라이언트 사이드 페이지네이션 시도
          try {
            const allDataResponse = await fetch(`${API_BASE_URL}/reviews`);
            if (allDataResponse.ok) {
              const allData = await allDataResponse.json();
              // 배열로 응답하는 경우
              if (Array.isArray(allData)) {
                const totalCount = allData.length;
                const totalPages = Math.ceil(totalCount / pageSize);
                const startIndex = (pageNum - 1) * pageSize;
                const endIndex = startIndex + pageSize;
                const paginatedData = allData.slice(startIndex, endIndex);

                setReviews(paginatedData);
                setPagination({
                  page: pageNum,
                  totalPages: totalPages || 1,
                  totalCount: totalCount,
                  limit: pageSize,
                });
                return;
              }
            }
          } catch {
            // 전체 데이터 가져오기도 실패하면 빈 데이터로 처리
          }

          console.warn("리뷰를 불러오는데 실패했습니다.");
          setReviews([]);
          setPagination({
            page: 1,
            totalPages: 1,
            totalCount: 0,
            limit: pageSize,
          });
          return;
        }

        const data = await response.json();

        if (data.reviews && data.pagination) {
          setReviews(data.reviews);
          setPagination(data.pagination);
        } else if (Array.isArray(data)) {
          const totalCount = data.length;
          const totalPages = Math.ceil(totalCount / pageSize);
          const startIndex = (pageNum - 1) * pageSize;
          const endIndex = startIndex + pageSize;
          const paginatedData = data.slice(startIndex, endIndex);

          setReviews(paginatedData);
          setPagination({
            page: pageNum,
            totalPages: totalPages || 1,
            totalCount: totalCount,
            limit: pageSize,
          });
        } else {
          // 응답 형식이 맞지 않을 때 빈 데이터로 처리
          console.warn("예상하지 못한 응답 형식입니다.");
          setReviews([]);
          setPagination({
            page: 1,
            totalPages: 1,
            totalCount: 0,
            limit: pageSize,
          });
        }
      } catch (err) {
        try {
          const allDataResponse = await fetch(`${API_BASE_URL}/reviews`);
          if (allDataResponse.ok) {
            const allData = await allDataResponse.json();
            // 배열로 응답하는 경우
            if (Array.isArray(allData)) {
              const totalCount = allData.length;
              const totalPages = Math.ceil(totalCount / pageSize);
              const startIndex = (pageNum - 1) * pageSize;
              const endIndex = startIndex + pageSize;
              const paginatedData = allData.slice(startIndex, endIndex);

              setReviews(paginatedData);
              setPagination({
                page: pageNum,
                totalPages: totalPages || 1,
                totalCount: totalCount,
                limit: pageSize,
              });
              return;
            }
          }
        } catch {
          // 전체 데이터 가져오기도 실패하면 빈 데이터로 처리
        }

        console.error("Error fetching reviews:", err);
        setReviews([]);
        setPagination({
          page: 1,
          totalPages: 1,
          totalCount: 0,
          limit: limit,
        });
      } finally {
        setIsLoading(false);
        setIsInitialLoading(false);
      }
    },
    [page, limit]
  );

  const submitReview = useCallback(
    async (formData: Omit<ReviewData, "id" | "createdAt">) => {
      try {
        setIsSubmitting(true);
        setError(null);

        const response = await fetch(`${API_BASE_URL}/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "리뷰 작성에 실패했습니다");
        }

        await response.json();

        // 리뷰 목록 다시 불러오기 (현재 페이지 유지)
        await fetchReviews(page, limit);

        return { success: true };
      } catch (err) {
        console.error("Error submitting review:", err);
        const errorMessage =
          err instanceof Error
            ? err.message
            : "리뷰 작성에 실패했습니다. 잠시 후 다시 시도해주세요.";
        setError(errorMessage);
        return { success: false, error: errorMessage };
      } finally {
        setIsSubmitting(false);
      }
    },
    [fetchReviews, page, limit]
  );

  useEffect(() => {
    fetchReviews(page, limit);
  }, [fetchReviews, page, limit]);

  return {
    reviews,
    pagination,
    isLoading,
    isInitialLoading,
    isSubmitting,
    error,
    fetchReviews,
    submitReview,
  };
};
