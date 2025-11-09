"use client";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function Service() {
  const features = [
    {
      tag: "교내 정보",
      title: "교내 정보, 이제 헤매지 마세요!",
      description:
        "매번 찾기 힘들었던 학과 연락처와 단과대 정보를 한 곳에,\n층별 편의시설과 내부 도식도까지 제공하여 정보 탐색이 쉬워집니다.",
      image: "/service-image-1.png",
    },
    {
      tag: "지름길 정보",
      title: "졸업생이 알려주는 캠퍼스 최단 루트!",
      description:
        "학생들이 직접 찾아낸 가장 빠르고 효율적인 지름길 정보만 엄선했습니다. \n 지도 확인은 기본, 거리/소요 시간부터 단계별 사진 안내까지 완벽하게!",
      image: "/service-image-2.png",
    },
    {
      tag: "학식 정보",
      title: "오늘의 학식, 바로 확인하세요!",
      description:
        "학식 탭 또는 식당 마커를 누르면 오늘의 메뉴가 바로 표시됩니다. \n 종합 강의동과 아마랜스 홀 등, 모든 식당 메뉴를 미리 보고 맛있게 선택할 수 있어요.",
      image: "/service-image-3.png",
    },
    {
      tag: "셔틀버스 정보",
      title: "교내 셔틀버스, 놓치는 일 없이 정확하게!",
      description:
        "지도에서 셔틀버스 마커만 클릭하면 정류장 위치와 도착 예정 시간 정보를 즉시 확인할 수 있어요! \n 모든 노선 정보를 한눈에 제공하여 셔틀 이용이 가장 쉬워집니다.",
      image: "/service-image-4.png",
    },
  ];

  const IMAGE_WIDTH = 700;
  const IMAGE_HEIGHT = 400;

  return (
    <section
      id="service"
      className="bg-black text-white"
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div
        className="max-w-[1180px] mx-auto"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <ScrollAnimation>
          {/* Main Service 라벨 */}
          <div className="text-center" style={{ marginBottom: "30px" }}>
            <p
              className="font-semibold"
              style={{
                color: "rgb(59, 130, 246)",
                fontSize: "14px",
                letterSpacing: "0.05em",
              }}
            >
              Main Service
            </p>
          </div>

          {/* 메인 제목 */}
          <div className="text-center" style={{ marginBottom: "10px" }}>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(52px, 5vw, 48px)",
                color: "rgb(255, 255, 255)",
                lineHeight: "1.3",
              }}
            >
              요기있수에 어떤 기능이 있는지 궁금하시다구요? 👀
            </h2>
          </div>

          {/* 서브 제목 */}
          <div className="text-center" style={{ marginBottom: "130px" }}>
            <p
              className="font-bold"
              style={{
                fontSize: "clamp(40px, 4vw, 32px)",
                color: "rgb(255, 255, 255)",
                lineHeight: "1.3",
              }}
            >
              캠퍼스 생활, 이제 요기있수 하나면 충분해요.
            </p>
          </div>
        </ScrollAnimation>

        {/* 서비스 기능 카드들 */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <ScrollAnimation key={index}>
              <div className="flex flex-col">
                {/* 텍스트 영역 */}
                <div style={{ marginBottom: "80px" }}>
                  <div style={{ marginBottom: "30px" }}>
                    <p style={{ textAlign: "left" }}>
                      <span style={{ fontSize: "18px" }}>
                        <strong>
                          <span style={{ color: "rgb(49, 130, 246)" }}>
                            | {feature.tag}
                          </span>
                        </strong>
                      </span>
                    </p>
                  </div>
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "clamp(28px, 4vw, 40px)",
                      color: "rgb(255, 255, 255)",
                      lineHeight: "1.3",
                      marginBottom: "24px",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "rgba(255, 255, 255, 0.7)",
                      lineHeight: "1.7",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* 이미지 영역 */}
                <div className="w-full" style={{ marginBottom: "100px" }}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
