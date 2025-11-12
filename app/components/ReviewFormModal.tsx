"use client";

import { useState } from "react";
import { ReviewData } from "../types/review";

interface ReviewFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: Omit<ReviewData, "id" | "createdAt">) => Promise<void>;
  isSubmitting: boolean;
}

const initialFormData: Omit<ReviewData, "id" | "createdAt"> = {
  title: "",
  content: "",
  department: "",
  studentId: "",
  name: "",
};

export default function ReviewFormModal({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting,
}: ReviewFormModalProps) {
  const [formData, setFormData] =
    useState<Omit<ReviewData, "id" | "createdAt">>(initialFormData);

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

    await onSubmit(formData);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  if (!isOpen) return null;

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
      }}
      onClick={handleClose}
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
            onClick={handleClose}
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
              onClick={handleClose}
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
  );
}
