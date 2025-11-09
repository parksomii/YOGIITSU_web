"use client";
import ScrollAnimation from "./ScrollAnimation";

export default function Contact() {
  const contactCards = [
    {
      title: "문의나 버그가 있다면?",
      info: "somi020605@naver.com",
      buttonText: "메일 보내기",
      link: "mailto:somi020605@naver.com",
    },
    {
      title: "요기있수 시연 영상 보셨나요?",
      info: "www.youtube.com/...",
      buttonText: "유튜브 보러가기",
      link: "https://www.youtube.com/watch?v=uGwNB6_aN9s",
    },
    {
      title: "요기있수 일상과 소식은?",
      info: "@yogiitsu",
      buttonText: "인스타그램 보러가기",
      link: "https://www.instagram.com/yogiitsu",
    },
  ];

  return (
    <section
      id="contact"
      className="text-white"
      style={{
        backgroundColor: "#000000",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="max-w-[1180px] mx-auto"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <ScrollAnimation>
          {/* Contact 라벨 */}
          <div className="text-center" style={{ marginBottom: "30px" }}>
            <p
              className="font-semibold"
              style={{
                color: "rgb(59, 130, 246)",
                fontSize: "14px",
                letterSpacing: "0.05em",
              }}
            >
              Contact
            </p>
          </div>

          {/* 제목 */}
          <div className="text-left" style={{ marginBottom: "80px" }}>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "rgb(255, 255, 255)",
                lineHeight: "1.2",
              }}
            >
              Contact us<span style={{ color: "#3182f6" }}>.</span>
            </h2>
          </div>
        </ScrollAnimation>

        {/* 연락처 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <a
                href={card.link}
                target={card.link.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  card.link.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                onClick={(e) => {
                  if (card.link.startsWith("mailto:")) {
                    e.preventDefault();
                    window.location.href = card.link;
                  }
                }}
                style={{
                  display: "block",
                  textDecoration: "none",
                }}
              >
                <div
                  className="rounded-[20px] relative"
                  style={{
                    backgroundColor: "#1a1a1a",
                    padding: "32px",
                    height: "100%",
                    border: "1px solid #2a2a2a",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#222222";
                    e.currentTarget.style.borderColor = "#333333";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#1a1a1a";
                    e.currentTarget.style.borderColor = "#2a2a2a";
                  }}
                >
                  {/* 외부 링크 아이콘 */}
                  <div
                    style={{
                      position: "absolute",
                      top: "24px",
                      right: "24px",
                      width: "20px",
                      height: "20px",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 5L5 15M15 5H9M15 5V11"
                        stroke="rgba(255, 255, 255, 0.5)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* 카드 내용 */}
                  <div style={{ paddingRight: "40px" }}>
                    {/* 제목 */}
                    <h3
                      className="font-bold"
                      style={{
                        fontSize: "20px",
                        color: "rgb(255, 255, 255)",
                        lineHeight: "1.3",
                        marginBottom: "16px",
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* 정보 */}
                    <p
                      style={{
                        fontSize: "14px",
                        color: "rgba(255, 255, 255, 0.6)",
                        lineHeight: "1.5",
                        marginBottom: "24px",
                      }}
                    >
                      {card.info}
                    </p>

                    {/* 버튼 */}
                    <div
                      style={{
                        color: "#3182f6",
                        fontSize: "14px",
                        fontWeight: "500",
                        display: "inline-block",
                      }}
                    >
                      {card.buttonText} →
                    </div>
                  </div>
                </div>
              </a>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
