"use client";

import { useState, useEffect } from "react";
import { API_BASE_URL } from "../config/api";

export const useMemberCount = () => {
  const [memberCount, setMemberCount] = useState<string>("150+");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMemberCount = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`${API_BASE_URL}/members/count`);

        if (!response.ok) {
          throw new Error("멤버 수를 불러오는데 실패했습니다");
        }

        const data = await response.json();
        setMemberCount(`${data.memberCount}+`);
      } catch (err) {
        console.error("Error fetching member count:", err);
        setError(
          "멤버 수를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요."
        );
        // 에러 발생 시 기본값 유지
      } finally {
        setIsLoading(false);
      }
    };

    fetchMemberCount();
  }, []);

  return { memberCount, isLoading, error };
};

