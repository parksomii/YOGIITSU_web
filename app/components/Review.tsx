"use client";

import { useState, useEffect } from "react";
import ScrollAnimation from "./ScrollAnimation";

interface ReviewData {
  id?: number;
  title: string;
  content: string;
  department: string;
  studentId: string;
  name: string;
  createdAt?: string;
}

// API 베이스 URL 설정
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://dev.yogiitsu.app";

export default function Review() {
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<ReviewData>({
    title: "",
    content: "",
    department: "",
    studentId: "",
    name: "",
  });

  // 리뷰 목록 불러오기
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
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
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.content ||
      !formData.department ||
      !formData.studentId ||
      !formData.name
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

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

      const newReview = await response.json();

      // 리뷰 목록 다시 불러오기
      await fetchReviews();

      // 폼 초기화 및 모달 닫기
      setFormData({
        title: "",
        content: "",
        department: "",
        studentId: "",
        name: "",
      });
      setIsModalOpen(false);

      alert("리뷰가 성공적으로 작성되었습니다!");
    } catch (err) {
      console.error("Error submitting review:", err);
      setError(err instanceof Error ? err.message : "리뷰 작성에 실패했습니다");
      alert(
        err instanceof Error
          ? err.message
          : "리뷰 작성에 실패했습니다. 잠시 후 다시 시도해주세요."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      title: "",
      content: "",
      department: "",
      studentId: "",
      name: "",
    });
    setError(null);
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
              onClick={() => setIsModalOpen(true)}
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
              <ScrollAnimation
                key={review.id || `${review.title}-${review.name}-${index}`}
                delay={index * 100}
              >
                <div
                  className="rounded-[20px] transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: "white",
                    padding: "32px",
                    border: "1px solid #e0e0e0",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                    transform: "translateY(0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(0, 0, 0, 0.15)";
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.borderColor = "#e0e0e0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px rgba(0, 0, 0, 0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#e0e0e0";
                  }}
                >
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "20px",
                      color: "rgb(0, 0, 0)",
                      lineHeight: "1.4",
                      marginBottom: "16px",
                    }}
                  >
                    {review.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.6)",
                      lineHeight: "1.6",
                      marginBottom: "24px",
                    }}
                  >
                    {review.content}
                  </p>
                  {/* 작성자 정보 */}
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.3)",
                      lineHeight: "1.5",
                    }}
                  >
                    {review.department}, {review.studentId} {review.name}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        )}
      </div>

      {/* 리뷰 작성 모달 */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "40px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "rgb(0, 0, 0)",
                  margin: 0,
                }}
              >
                리뷰 작성하기
              </h3>
              <button
                onClick={handleCloseModal}
                disabled={isSubmitting}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "24px",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  color: "rgba(0, 0, 0, 0.5)",
                  padding: "0",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = "#f0f0f0";
                    e.currentTarget.style.color = "rgb(0, 0, 0)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "rgba(0, 0, 0, 0.5)";
                }}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "rgb(0, 0, 0)",
                    marginBottom: "8px",
                  }}
                >
                  제목 *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #e0e0e0",
                    fontSize: "16px",
                    outline: "none",
                    transition: "border-color 0.2s",
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? "not-allowed" : "text",
                  }}
                  onFocus={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.borderColor = "#3b82f6";
                    }
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#e0e0e0";
                  }}
                  placeholder="제목을 입력하세요"
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "rgb(0, 0, 0)",
                    marginBottom: "8px",
                  }}
                >
                  내용 *
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #e0e0e0",
                    fontSize: "16px",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                    transition: "border-color 0.2s",
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? "not-allowed" : "text",
                  }}
                  onFocus={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.borderColor = "#3b82f6";
                    }
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#e0e0e0";
                  }}
                  placeholder="내용을 입력하세요"
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "rgb(0, 0, 0)",
                    marginBottom: "8px",
                  }}
                >
                  학과 *
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #e0e0e0",
                    fontSize: "16px",
                    outline: "none",
                    transition: "border-color 0.2s",
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? "not-allowed" : "text",
                  }}
                  onFocus={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.borderColor = "#3b82f6";
                    }
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#e0e0e0";
                  }}
                  placeholder="예: 컴퓨터SW학과"
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "rgb(0, 0, 0)",
                    marginBottom: "8px",
                  }}
                >
                  학번 *
                </label>
                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #e0e0e0",
                    fontSize: "16px",
                    outline: "none",
                    transition: "border-color 0.2s",
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? "not-allowed" : "text",
                  }}
                  onFocus={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.borderColor = "#3b82f6";
                    }
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#e0e0e0";
                  }}
                  placeholder="예: 23학번"
                />
              </div>

              <div style={{ marginBottom: "30px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "rgb(0, 0, 0)",
                    marginBottom: "8px",
                  }}
                >
                  이름 *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #e0e0e0",
                    fontSize: "16px",
                    outline: "none",
                    transition: "border-color 0.2s",
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? "not-allowed" : "text",
                  }}
                  onFocus={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.borderColor = "#3b82f6";
                    }
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#e0e0e0";
                  }}
                  placeholder="예: 홍00"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={isSubmitting}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "8px",
                    border: "1px solid #e0e0e0",
                    backgroundColor: "white",
                    color: "rgb(0, 0, 0)",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                    opacity: isSubmitting ? 0.5 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "#f5f5f5";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                  }}
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#3b82f6",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                    boxShadow: "0 4px 6px rgba(59, 130, 246, 0.3)",
                    opacity: isSubmitting ? 0.5 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "#2563eb";
                      e.currentTarget.style.boxShadow =
                        "0 6px 12px rgba(59, 130, 246, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#3b82f6";
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px rgba(59, 130, 246, 0.3)";
                  }}
                >
                  {isSubmitting ? "저장 중..." : "저장하기"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
    </>
  );
}
