// 날짜 계산 함수들
export const calculateDaysSince = (startDate: string): string => {
  const start = new Date(startDate);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - start.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays}일+`;
};

export const calculateMonthsSince = (startDate: string): string => {
  const start = new Date(startDate);
  const now = new Date();
  const diffMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  return `${diffMonths}개월+`;
};
