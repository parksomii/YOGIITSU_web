"use client";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function Team() {
  const teamMembers = [
    {
      name: "박소미",
      email: "somi020605@naver.com",
      role: "백엔드",
      subRole: "팀장",
      image: "/team-member-1.png",
      github: "https://github.com/parksomii",
    },
    {
      name: "조예성",
      email: "yeseong9577@gmail.com",
      role: "백엔드",
      subRole: "팀원",
      image: "/team-member-2.png",
      github: "https://github.com/joyes0ng",
    },
    {
      name: "이가영",
      email: "gayoung030228@gmail.com",
      role: "백엔드",
      subRole: "팀원",
      image: "/team-member-3.png",
      github: "https://github.com/gayoung228",
    },
    {
      name: "김종민",
      email: "jongminkim0629@gmail.com",
      role: "프론트엔드",
      subRole: "팀원",
      image: "/team-member-4.png",
      github: "https://github.com/jongmink0",
    },
    {
      name: "심채원",
      email: "wonchaesim@naver.com",
      role: "디자이너",
      subRole: "팀원",
      image: "/team-member-5.png",
    },
  ];

  return (
    <section
      id="team"
      className="text-black"
      style={{
        backgroundColor: "#f5f5f5",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="max-w-[1300px] mx-auto"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <ScrollAnimation>
          {/* Team 라벨 */}
          <div className="text-center" style={{ marginBottom: "30px" }}>
            <p
              className="font-semibold"
              style={{
                color: "rgb(59, 130, 246)",
                fontSize: "14px",
                letterSpacing: "0.05em",
              }}
            >
              Team
            </p>
          </div>

          {/* 제목 */}
          <div className="text-center" style={{ marginBottom: "80px" }}>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "rgb(0, 0, 0)",
                lineHeight: "1.2",
              }}
            >
              <span style={{ color: "#3b82f6" }}>요기있수</span> 팀 소개
            </h2>
          </div>
        </ScrollAnimation>

        {/* 팀원 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div
                className="rounded-[20px] overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  transform: "translateY(0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0, 0, 0, 0.15)";
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "#e0e0e0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#e0e0e0";
                }}
              >
                {/* 역할 태그 */}
                <div style={{ padding: "20px 24px 0 24px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1",
                      fontWeight: "600",
                    }}
                  >
                    <span style={{ color: "rgb(49, 130, 246)" }}>
                      {member.role}
                    </span>
                    <span style={{ color: "rgb(200, 200, 200)" }}>
                      &nbsp;|&nbsp;
                    </span>
                    <span style={{ color: "rgb(109, 109, 109)" }}>
                      {member.subRole}
                    </span>
                  </p>
                </div>

                {/* 이미지 영역 */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "16px 0",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: "145px", height: "auto" }}
                  />
                </div>

                {/* 텍스트 영역 */}
                <div
                  style={{ padding: "0 24px 32px 24px", textAlign: "center" }}
                >
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "30px",
                      color: "rgb(109, 109, 109)",
                      lineHeight: "1",
                      marginTop: "35px",
                      marginBottom: "14px",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.5)",
                      lineHeight: "1.5",
                      marginBottom: "24px",
                    }}
                  >
                    {member.email}
                  </p>

                  {/* 더 보기 버튼 */}
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full font-normal transition-all duration-300 inline-block"
                    style={{
                      border: "1px solid #d0d0d0",
                      backgroundColor: "transparent",
                      color: "rgb(0, 0, 0)",
                      fontSize: "14px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f0f0f0";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    더 보기
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
