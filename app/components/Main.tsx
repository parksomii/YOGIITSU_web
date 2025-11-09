"use client";
import Image from "next/image";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center relative overflow-hidden min-h-screen px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(135deg, #007bff 0%, #00bcd4 100%)",
        paddingTop: "clamp(80px, 15vh, 150px)",
        paddingBottom: "0px",
        zIndex: 0,
      }}
    >
      {/* 텍스트 섹션 */}
      <div
        className="text-center w-full max-w-4xl mx-auto"
        style={{
          marginBottom: "0px",
          paddingTop: "clamp(20px, 5vh, 45px)",
          paddingBottom: "clamp(40px, 8vh, 80px)",
        }}
      >
        <h1
          className="text-white font-bold px-4"
          style={{
            fontSize: "clamp(14px, 3vw, 20px)",
            lineHeight: "1.2",
            color: "rgb(255, 255, 255)",
            marginBottom: "clamp(8px, 2vh, 10px)",
          }}
        >
          수원대학교 위치기반 서비스, 요기있수
        </h1>
        <h2
          className="text-white font-bold px-4"
          style={{
            fontSize: "clamp(40px, 10vw, 100px)",
            lineHeight: "1",
            color: "rgb(255, 255, 255)",
            marginBottom: "clamp(15px, 3vh, 20px)",
          }}
        >
          YOGIITSU
        </h2>
        <a
          href="#download"
          className="inline-block px-4 sm:px-5 py-2.5 sm:py-3 text-white text-xs sm:text-sm rounded-full font-normal border border-white transition-all duration-300"
          style={{
            marginTop: "clamp(5px, 1vh, 10px)",
            backgroundColor: "transparent",
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
          앱 다운로드 바로가기
        </a>
      </div>

      {/* 아이폰 목업 이미지 컨테이너 */}
      <div
        className="relative flex items-end justify-center w-full max-w-7xl mx-auto"
        style={{ 
          marginTop: "clamp(-40px, -5vh, -80px)", 
          paddingBottom: "0px",
          flexGrow: 1
        }}
      >
        <div className="relative w-full h-full flex items-end">
          <Image
            src="/phone-mockup.png"
            alt="요기있수 앱 사진"
            width={1800}
            height={1000}
            className="object-contain object-bottom w-full h-auto"
            style={{
              maxHeight: "clamp(350px, 55vh, 700px)",
              display: "block"
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
}