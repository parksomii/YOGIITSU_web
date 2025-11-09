"use client";
import ScrollAnimation from "./ScrollAnimation";
import Image from "next/image";

export default function Download() {
  return (
    <section
      id="download"
      className="bg-white text-white"
      style={{
        backgroundColor: "#f5f5f5",
        paddingTop: "150px",
        paddingBottom: "30px",
      }}
    >
      <div
        className="max-w-[1600px] mx-auto"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingBottom: "55px",
        }}
      >
        {/* 검정 배경 라운딩 박스 */}
        <div
          style={{
            backgroundColor: "#000000",
            borderRadius: "32px",
            padding: "60px",
            paddingTop: "80px",
            paddingBottom: "80px",
            overflow: "hidden",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* 왼쪽 텍스트 영역 */}
            <div className="flex-1" style={{ minWidth: "0" }}>
              <ScrollAnimation>
                {/* 상단 라벨 */}
                <div style={{ marginBottom: "18px" }}>
                  <p
                    className="font-semibold"
                    style={{
                      color: "rgb(59, 130, 246)",
                      fontSize: "16px",
                      letterSpacing: "0.05em",
                      paddingInline: "30px",
                      paddingTop: "8px",
                    }}
                  >
                    요기있수 앱 다운로드
                  </p>
                </div>

                {/* 메인 제목 */}
                <div style={{ marginBottom: "24px" }}>
                  <h2
                    className="font-bold"
                    style={{
                      fontSize: "clamp(54px, 4vw, 48px)",
                      color: "rgb(255, 255, 255)",
                      lineHeight: "1.3",
                      paddingInline: "30px",
                    }}
                  >
                    낭비되는 시간 STOP!
                    <br />
                    교내 정보는 요기있수에서
                    <br />
                    빠르게 확인!
                  </h2>
                </div>

                {/* 설명 */}
                <div style={{ marginBottom: "40px" }}>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "rgba(255, 255, 255, 0.7)",
                      lineHeight: "1.6",
                      paddingInline: "30px",
                    }}
                  >
                    아래 버튼을 클릭하시면 다운로드 사이트로 이동합니다.
                  </p>
                </div>

                {/* 다운로드 버튼들 */}
                <div
                  className="flex flex-col sm:flex-row gap-4"
                  style={{ paddingInline: "30px" }}
                >
                  <a
                    href="https://apps.apple.com/kr/app/%EC%9A%94%EA%B8%B0%EC%9E%88%EC%88%98/id6751530444"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                    }}
                  >
                    <Image
                      src="/appstore-logo.png"
                      alt="App Store"
                      width={160}
                      height={58}
                      style={{
                        height: "58.5px",
                        width: "auto",
                        display: "block",
                        paddingTop: "10px",
                      }}
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.yogiitsuapp&hl=ko"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                    }}
                  >
                    <Image
                      src="/googleplay-logo.png"
                      alt="Google Play"
                      width={180}
                      height={70}
                      style={{
                        height: "70px",
                        width: "auto",
                        display: "block",
                      }}
                    />
                  </a>
                </div>
              </ScrollAnimation>
            </div>

            {/* 오른쪽 이미지 영역 */}
            <div className="flex-1 flex justify-end" style={{ minWidth: "0" }}>
              <ScrollAnimation>
                <div
                  style={{
                    width: "100%",
                    maxWidth: "900px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/download-img.png"
                    alt="요기있수 앱 다운로드"
                    width={700}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
