"use client";

import { useState } from "react";
import { useReviews } from "../hooks/useReviews";
import ReviewCard from "./ReviewCard";
import ReviewFormModal from "./ReviewFormModal";
import ScrollAnimation from "./ScrollAnimation";
import { ReviewData } from "../types/review";

export default function Review() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalKey, setModalKey] = useState(0);

  // 훅에서 데이터 및 로직 가져오기
  const { reviews, isLoading, isSubmitting, error, submitReview } = useReviews();

  const handleOpenModal = () => {
    setModalKey((prev) => prev + 1); // 모달이 열릴 때마다 새로운 키 생성
    setIsModalOpen(true);
  };

  // 폼 제출 핸들러: 폼 모달에서 호출되며, 훅의 submitReview를 사용
  const handleFormSubmit = async (
    formData: Omit<ReviewData, "id" | "createdAt">
  ) => {
    const result = await submitReview(formData);
    if (result.success) {
      // 폼 제출 후 모달 닫기
      setIsModalOpen(false);
      alert("리뷰가 성공적으로 작성되었습니다!");
    } else {
      // 에러 메시지는 훅에서 이미 설정됨
      alert(result.error || "리뷰 작성에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  if (isLoading) {
    return (
      <section
        id="review"
        className="text-black"
        style={{
          backgroundColor: "#f5f5f5",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        <div
          className="max-w-[1180px] mx-auto text-center"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          <p style={{ fontSize: "18px", color: "#666" }}>리뷰를 불러오는 중...</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <style>{`
        @keyframes bounce {
          from { 
            transform: translateY(0);
          }
          to { 
            transform: translateY(-12px);
          }
        }

        .animate-bounce {
          animation: bounce 1.2s ease-in-out 1s infinite alternate;
        }
      `}</style>
      <section
        id="review"
        className="text-black"
        style={{
          backgroundColor: "#f5f5f5",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
      <div
        className="max-w-[1180px] mx-auto"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        {error && (
          <div
            style={{
              backgroundColor: "#fee",
              color: "#c33",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            {error}
          </div>
        )}

        <ScrollAnimation>
          {/* User Review 라벨 */}
          <div style={{ marginBottom: "30px" }}>
            <p
              className="font-semibold"
              style={{
                color: "rgb(59, 130, 246)",
                fontSize: "14px",
                letterSpacing: "0.05em",
              }}
            >
              User Review
            </p>
          </div>

          {/* 제목 */}
          <div
            style={{
              marginBottom: "80px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "rgb(0, 0, 0)",
                lineHeight: "1.2",
                margin: 0,
              }}
            >
              <span style={{ color: "#3b82f6" }}>요기있수</span>
              를 사용해 본
              <br />
              학생들의 이야기
            </h2>
            <button
              onClick={handleOpenModal}
              className="flex items-center gap-2 transition-all duration-300 hover:scale-105 animate-bounce"
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                padding: "12px 24px",
                borderRadius: "12px",
                border: "none",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(59, 130, 246, 0.3)",
                alignSelf: "flex-start",
                lineHeight: "1.2",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb";
                e.currentTarget.style.boxShadow =
                  "0 6px 12px rgba(59, 130, 246, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#3b82f6";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(59, 130, 246, 0.3)";
              }}
            >
              <span style={{ fontSize: "20px" }}></span>
              나도 한 마디 하기
            </button>
          </div>
        </ScrollAnimation>

        {/* 리뷰 카드들 */}
        {reviews.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#666",
            }}
          >
            <p style={{ fontSize: "18px" }}>아직 작성된 리뷰가 없습니다.</p>
            <p style={{ fontSize: "14px", marginTop: "8px" }}>
              첫 번째 리뷰를 작성해보세요!
            </p>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ marginBottom: "40px" }}
          >
            {reviews.map((review, index) => (
              <ReviewCard key={review.id || `${review.title}-${review.name}-${index}`} review={review} index={index} />
            ))}
          </div>
        )}
      </div>

      {/* 리뷰 작성 모달 */}
      <ReviewFormModal
        key={modalKey}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        isSubmitting={isSubmitting}
      />
    </section>
    </>
  );
}
