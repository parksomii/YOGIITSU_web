"use client";
import ScrollAnimation from "./ScrollAnimation";

export default function Review() {
  const reviews = [
    {
      title: "시간 절약에 도움돼요!",
      content:
        "급하게 학과 사무실 전화해야 했는데 예전처럼 학교 홈페이지 헤매지 않고 요기있수에서 바로 찾았어요. 단과대별 연락처랑 위치까지 깔끔하게 정리되어 있어서 편리했습니다!",
      department: "경영학과",
      studentId: "23학번",
      name: "이00",
    },
    {
      title: "셔틀버스 타고 지각 안 했어요!",
      content:
        "셔틀버스 탑승 위치도 제대로 모르고 셔틀버스 시간표도 몰랐는데 요기있수에서 확인하고 무사히 셔틀 버스 탔어요!  덕분에 지각하지 않고 강의실까지 갔던 기억이 나네요.",
      department: "간호학과",
      studentId: "24학번",
      name: "박00",
    },
    {
      title: "학식 메뉴 제공 너무 좋아요",
      content:
        '친구들끼리 "오늘 학식 뭐냐?" 물어볼 필요가 없어졌어요. 오늘의 메뉴와 가격 바로 뜨니까 비교해서 고르기 너무 좋았어요! 특히 밥 먹으러 멀리 가기 전에 메뉴 확인하고 가는 게 제일 만족스러워요.',
      department: "컴퓨터SW학과",
      studentId: "21학번",
      name: "박00",
    },
    {
      title: "지름길 정보, 진짜 꿀팁이에요!",
      content:
        "캠퍼스 너무 넓어서 지름길을 너무 원했는데 지름길 정보 제공 기능 진짜 꿀팁이에요. 사진으로 단계별 안내해 줘서 따라가기만 하면 되니까 길 잃을 걱정 없었어요!",
      department: "정보보호학과",
      studentId: "24학번",
      name: "최00",
    },
    {
      title: "시설 정보 찾기 너무 편해졌어요!",
      content:
        "프린터기부터 카페까지 모든 편의시설 정보를 지도에서 바로 확인하고 갈 수 있어서 시간이 확실히 절약됩니다. 층별 안내 도식도까지 있어서 잘 찾아갈 수 있었어요!",
      department: "컴퓨터SW학과",
      studentId: "22학번",
      name: "김00",
    },
    {
      title: "학교 정보 찾기 진짜 한 번에 끝!",
      content:
        "학과 사무실 위치나 전화번호까지 모두 정리되어 있어서 너무 편해요! 예전에는 일일이 검색했는데 요기있수 앱에서 바로 볼 수 있어서 시간 엄청 절약돼요! 너무 좋습니다!",
      department: "운동건강관리학과",
      studentId: "23학번",
      name: "한00",
    },
  ];

  return (
    <section
      id="review"
      className="text-black"
      style={{
        backgroundColor: "#f5f5f5",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="max-w-[1180px] mx-auto"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <ScrollAnimation>
          {/* User Review 라벨 */}
          <div style={{ marginBottom: "30px" }}>
            <p
              className="font-semibold"
              style={{
                color: "rgb(59, 130, 246)",
                fontSize: "14px",
                letterSpacing: "0.05em",
              }}
            >
              User Review
            </p>
          </div>

          {/* 제목 */}
          <div style={{ marginBottom: "80px" }}>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "rgb(0, 0, 0)",
                lineHeight: "1.2",
              }}
            >
              <span style={{ color: "#3b82f6" }}>요기있수</span>
              를 사용해 본
              <br />
              학생들의 이야기
            </h2>
          </div>
        </ScrollAnimation>

        {/* 리뷰 카드들 */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ marginBottom: "40px" }}
        >
          {reviews.map((review, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div
                className="rounded-[20px] transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: "white",
                  padding: "32px",
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
                <h3
                  className="font-bold"
                  style={{
                    fontSize: "20px",
                    color: "rgb(0, 0, 0)",
                    lineHeight: "1.4",
                    marginBottom: "16px",
                  }}
                >
                  {review.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(0, 0, 0, 0.6)",
                    lineHeight: "1.6",
                    marginBottom: "24px",
                  }}
                >
                  {review.content}
                </p>
                {/* 작성자 정보 */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(0, 0, 0, 0.3)",
                    lineHeight: "1.5",
                  }}
                >
                  {review.department}, {review.studentId} {review.name}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
