"use client";
import ScrollAnimation from "./ScrollAnimation";

// 날짜 계산 함수들
const calculateDaysSince = (startDate: string) => {
  const start = new Date(startDate);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - start.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays}일+`;
};

const calculateMonthsSince = (startDate: string) => {
  const start = new Date(startDate);
  const now = new Date(); // 월 차이 계산 로직
  const diffMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  return `${diffMonths}개월+`;
};

export default function About() {
  const yogitsuDays = calculateDaysSince("2025-08-26");
  const projectMonths = calculateMonthsSince("2025-01-10");

  const stats = [
    {
      label: "요기있수와 함께한 날",
      value: yogitsuDays,
    },
    {
      label: "요기있수\n앱 다운로드 수",
      value: "150+",
    },
    {
      label: "프로젝트 기간",
      value: projectMonths,
    },
  ];

  return (
    <section
      id="about"
      className="bg-black text-white"
      style={{
        paddingTop: "150px",
        paddingBottom: "80px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div
        className="max-w-[1180px] mx-auto"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <ScrollAnimation>
          {/* About 라벨 */}
          <div className="text-center" style={{ marginBottom: "30px" }}>
            <p
              className="font-semibold"
              style={{
                color: "rgb(59, 130, 246)",
                fontSize: "14px",
                letterSpacing: "0.05em",
              }}
            >
              About
            </p>
          </div>

          {/* 제목 */}
          <div className="text-center" style={{ marginBottom: "30px" }}>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "rgb(255, 255, 255)",
                lineHeight: "1.2",
              }}
            >
              캠퍼스 라이프의 변화, 요기있수가 만들어갑니다
            </h2>
          </div>

          {/* 설명 */}
          <div className="text-center" style={{ marginBottom: "60px" }}>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.6",
              }}
            >
              길 찾기부터 정보 탐색까지, 요기있수는 학생들이 캠퍼스 생활을 보다 쉽고 즐겁게 누릴 수 있도록 탄생했습니다.
              <br />
              여러분의 `캠퍼스 길잡이`가 되어, 매일매일 더 빠르고 스마트한 학교생활을 돕고 있습니다.
            </p>
          </div>

          {/* 통계 카드들 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index}>
                <div
                  className="rounded-[20px]"
                  style={{
                    backgroundColor: "#1a1a1a",
                    paddingTop: "50px",
                    paddingBottom: "50px",
                    paddingLeft: "32px",
                    paddingRight: "32px",
                  }}
                >
                  <h5
                    className="font-medium"
                    style={{
                      textAlign: "left",
                      lineHeight: "1.4",
                      fontSize: "16px",
                      color: "rgba(255, 255, 255, 0.5)",
                      marginBottom: "30px",
                    }}
                  >
                    {stat.label.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < stat.label.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </h5>
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "48px",
                      color: "rgb(255, 255, 255)",
                      textAlign: "left",
                      margin: "0px",
                      lineHeight: "1",
                    }}
                  >
                    {stat.value}
                  </h3>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* 더 알아보기 버튼 */}
          <ScrollAnimation>
            <div
              className="text-center"
              style={{ marginTop: "40px", paddingBottom: "100px" }}
            >
              <a
                href="#service"
                className="inline-block px-6 py-3 rounded-full font-normal transition-all duration-300 border border-white"
                style={{
                  backgroundColor: "transparent",
                  color: "rgb(255, 255, 255)",
                  fontSize: "13px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "black";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "white";
                }}
              >
                더 알아보기
              </a>
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>
    </section>
  );
}
