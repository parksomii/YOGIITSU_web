"use client";

import ScrollAnimation from "./ScrollAnimation";
import { ReviewData } from "../types/review";

interface ReviewCardProps {
  review: ReviewData;
  index: number;
  onClick?: () => void;
}

export default function ReviewCard({
  review,
  index,
  onClick,
}: ReviewCardProps) {
  return (
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
          height: "290px",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={onClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.borderColor = "#e0e0e0";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
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
            flexShrink: 0,
          }}
        >
          {review.title}
        </h3>
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            marginBottom: "24px",
            minHeight: 0,
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "rgba(0, 0, 0, 0.6)",
              lineHeight: "1.6",
            }}
          >
            {review.content}
          </p>
        </div>
        {/* 작성자 정보 */}
        <p
          style={{
            fontSize: "14px",
            color: "rgba(0, 0, 0, 0.3)",
            lineHeight: "1.5",
            flexShrink: 0,
          }}
        >
          {review.department}, {review.studentId} {review.name}
        </p>
      </div>
    </ScrollAnimation>
  );
}
