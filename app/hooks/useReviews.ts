"use client";

import { useState, useEffect, useCallback } from "react";
import { ReviewData } from "../types/review";
import { API_BASE_URL } from "../config/api";

export const useReviews = () => {
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`${API_BASE_URL}/reviews`);

      if (!response.ok) {
        throw new Error("리뷰를 불러오는데 실패했습니다");
      }

      const data = await response.json();
      setReviews(data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setError("리뷰를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  }, []);

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

        // 리뷰 목록 다시 불러오기
        await fetchReviews();

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
    [fetchReviews]
  );

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return { reviews, isLoading, isSubmitting, error, fetchReviews, submitReview };
};
