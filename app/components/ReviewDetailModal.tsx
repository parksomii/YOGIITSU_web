"use client";

import { ReviewData } from "../types/review";

interface ReviewDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  review: ReviewData | null;
}

export default function ReviewDetailModal({
  isOpen,
  onClose,
  review,
}: ReviewDetailModalProps) {
  if (!isOpen || !review) return null;

  return (
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
        animation: "fadeIn 0.2s ease-in-out",
      }}
      onClick={onClose}
    >
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .modal-content {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
      <div
        className="modal-content"
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "48px",
          maxWidth: "800px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "32px",
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "rgb(0, 0, 0)",
              margin: 0,
              lineHeight: "1.3",
              flex: 1,
              paddingRight: "20px",
            }}
          >
            {review.title}
          </h2>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "32px",
              cursor: "pointer",
              color: "rgba(0, 0, 0, 0.5)",
              padding: "0",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              transition: "all 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f0f0f0";
              e.currentTarget.style.color = "rgb(0, 0, 0)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "rgba(0, 0, 0, 0.5)";
            }}
          >
            ×
          </button>
        </div>

        {/* 내용 */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            marginBottom: "32px",
            minHeight: 0,
          }}
        >
          <p
            style={{
              fontSize: "18px",
              color: "rgba(0, 0, 0, 0.8)",
              lineHeight: "1.8",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {review.content}
          </p>
        </div>

        {/* 작성자 정보 */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid #e0e0e0",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontSize: "16px",
              color: "rgba(0, 0, 0, 0.5)",
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            {review.department} · {review.studentId} · {review.name}
          </p>
          {review.createdAt && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.3)",
                lineHeight: "1.5",
                marginTop: "8px",
                margin: 0,
              }}
            >
              {new Date(review.createdAt).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
