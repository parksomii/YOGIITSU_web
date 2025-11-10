"use client";
import ScrollAnimation from "./ScrollAnimation";
import Image from "next/image";

export default function Download() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .download-section {
            padding-top: 80px !important;
            padding-bottom: 20px !important;
          }
          .download-box {
            padding: 20px !important;
            padding-top: 30px !important;
            padding-bottom: 30px !important;
            border-radius: 20px !important;
          }
          .download-label {
            font-size: 14px !important;
            padding-inline: 0px !important;
            margin-bottom: 12px !important;
          }
          .download-title {
            font-size: 24px !important;
            line-height: 1.3 !important;
            padding-inline: 0px !important;
            margin-bottom: 16px !important;
          }
          .download-description {
            font-size: 13px !important;
            padding-inline: 0px !important;
            margin-bottom: 24px !important;
          }
          .download-buttons {
            padding-inline: 0px !important;
            justify-content: center !important;
            gap: 8px !important;
          }
          .download-button-img {
            height: 40px !important;
          }
          .download-button-img-google {
            height: 48px !important;
          }
        }
      `}</style>
      <section
        id="download"
        className="bg-white text-white download-section"
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
            className="download-box"
            style={{
              backgroundColor: "#000000",
              borderRadius: "32px",
              padding: "60px",
              paddingTop: "80px",
              paddingBottom: "80px",
              overflow: "hidden",
            }}
          >
            <div className="flex flex-row items-center gap-8 md:gap-12">
              {/* 왼쪽 텍스트 영역 */}
              <div
                className="flex-1 text-center md:text-left"
                style={{ minWidth: "0" }}
              >
                <ScrollAnimation>
                  {/* 상단 라벨 */}
                  <div style={{ marginBottom: "18px" }}>
                    <p
                      className="font-semibold download-label"
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
                      className="font-bold download-title"
                      style={{
                        fontSize: "clamp(54px, 4vw, 48px)",
                        color: "rgb(255, 255, 255)",
                        lineHeight: "1.3",
                        paddingInline: "30px",
                      }}
                    >
                      낭비되는 시간 STOP!
                      <br />
                      교내 정보는{" "}
                      <span style={{ color: "#3b82f6" }}>요기있수</span>에서
                      <br />
                      빠르게 확인!
                    </h2>
                  </div>

                  {/* 설명 */}
                  <div style={{ marginBottom: "40px" }}>
                    <p
                      className="download-description"
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
                    className="flex flex-row gap-4 download-buttons"
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
                        className="download-button-img"
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
                        className="download-button-img-google"
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
              <div
                className="hidden md:flex flex-1 justify-end"
                style={{ minWidth: "0" }}
              >
                <ScrollAnimation>
                  <div
                    className="download-image-container"
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
    </>
  );
}
