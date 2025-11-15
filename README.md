<div align="center">

# 수원대학교 위치기반 서비스 '요기있수' 홍보 웹사이트

<p>
  <img width="2536" height="1352" alt="image" src="https://github.com/user-attachments/assets/c0939f5f-502c-42e7-a13c-bb8c6d2496f9" />
</p>

</div>

## 📋 프로젝트 소개

수원대학교 학생들을 위한 위치기반 서비스 '요기있수' 앱의 공식 웹사이트입니다. 앱의 주요 기능과 사용자 리뷰를 소개하고, 다운로드 링크를 제공합니다.
## 🔗 링크

- 웹사이트: [https://web.yogiitsu.app](https://web.yogiitsu.app)
## 🛠️ 기술 스택

### Frontend
- **Next.js** 16.0.1 - React 기반 프레임워크
- **React** 19.2.0 - UI 라이브러리
- **TypeScript** 5 - 타입 안정성을 위한 언어
- **Tailwind CSS** 4 - 유틸리티 기반 CSS 프레임워크

### 개발 도구
- **ESLint** - 코드 품질 관리
- **PostCSS** - CSS 후처리

### 라이브러리
- **react-icons** 5.5.0 - 아이콘 라이브러리


## 📁 프로젝트 구조

```
YOGIITSU_web/
├── app/
│   ├── components/                 # React 컴포넌트
│   │   ├── Header.tsx              # 헤더 컴포넌트
│   │   ├── Main.tsx                # 메인 히어로 섹션
│   │   ├── About.tsx               # 소개 섹션
│   │   ├── Service.tsx             # 서비스 소개
│   │   ├── Review.tsx              # 리뷰 섹션
│   │   ├── ReviewCard.tsx          # 리뷰 카드 컴포넌트
│   │   ├── ReviewDetailModal.tsx   # 리뷰 상세 모달
│   │   ├── ReviewFormModal.tsx     # 리뷰 작성 모달
│   │   ├── Team.tsx                # 팀 소개
│   │   ├── Download.tsx            # 다운로드 섹션
│   │   ├── Contact.tsx             # 연락처 섹션
│   │   ├── Footer.tsx              # 푸터 컴포넌트
│   │   └── ScrollAnimation.tsx     # 스크롤 애니메이션
│   ├── config/                     # 설정 파일
│   │   └── api.ts                  # API 설정
│   ├── hooks/                      # 커스텀 훅
│   │   ├── useMemberCount.ts       # 회원 수 조회 훅
│   │   └── useReviews.ts           # 리뷰 조회 훅
│   ├── types/                      # TypeScript 타입 정의
│   │   └── review.d.ts             # 리뷰 타입 정의
│   ├── utils/                      # 유틸리티 함수
│   │   └── dateCalculations.ts     # 날짜 계산 유틸리티
│   ├── layout.tsx                  # 루트 레이아웃
│   ├── page.tsx                    # 메인 페이지
│   ├── globals.css                 # 전역 스타일
│   └── favicon.ico                 # 파비콘
├── out/                            # 빌드 출력 디렉토리
```

## 🚀 시작하기

### 필수 요구사항
- Node.js 18 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
```bash
git clone https://github.com/parksomii/YOGIITSU_web.git
cd YOGIITSU_web
```

2. **의존성 설치**
```bash
npm install
```

3. **개발 서버 실행**
```bash
npm run dev
```

4. **브라우저에서 확인**
   - [http://localhost:3000](http://localhost:3000)에서 확인 가능

### 빌드

프로덕션 빌드를 생성하려면:

```bash
npm run build
```

빌드된 파일은 `out` 디렉토리에 생성됩니다.

### 정적 파일 서빙

빌드 후 정적 파일을 서빙하려면:

```bash
npm run start
```

## 🚢 배포

### 현재 배포 방식
- 정적 사이트로 빌드되어 `out` 디렉토리에 생성됩니다.
- 빌드된 파일을 정적 호스팅 서비스에 배포할 수 있습니다.

### CI/CD (추후 구현 예정)
- **GitHub Actions**를 통한 자동 빌드 및 배포 파이프라인 구축 예정
- 코드 푸시 시 자동으로 빌드 및 배포가 진행됩니다.

## 📝 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원
- **스크롤 애니메이션**: 부드러운 스크롤 효과
- **SEO 최적화**: 메타데이터 및 Open Graph 설정
- **성능 최적화**: Next.js Image 컴포넌트 활용
- **타입 안정성**: TypeScript로 타입 안정성 보장

## 🎨 스타일링

이 프로젝트는 Tailwind CSS를 사용하여 스타일링되었습니다. 커스텀 애니메이션과 반응형 디자인이 적용되어 있습니다.

