# ERP Frontend Web Application

본 프로젝트는 ERP 시스템의 **프론트엔드 아키텍처 및 UI/UX 설계 역량**에 초점을 둔 포트폴리오 프로젝트입니다.  
실제 ERP/MES 환경을 가정한 백엔드 REST API 구조를 기준으로 화면 연계를 고려하였으며,  
프론트엔드에서는 **인증·권한·업무 흐름 중심의 화면 설계와 상태 관리**에 집중하였습니다.

> 본 저장소는 **ERP 프론트엔드 포트폴리오 용도**로 제작되었습니다.

---

## 🔐 Authentication (Login & User Registration)

JWT 기반 인증 흐름을 고려하여 설계한 시스템 진입 및 사용자 등록 화면입니다.  
사용자 인증 상태 및 권한(Role)에 따라 접근 가능한 화면이 분기되도록 설계되었습니다.

### Login
- JWT 기반 인증 흐름을 고려한 로그인 UI
- 인증 정보 LocalStorage 관리
- 인증 만료 및 권한 오류 발생 시 강제 로그아웃 처리 흐름 고려

### User Registration (회원가입)
- ERP 사용자 등록을 위한 회원가입 화면
- 회사명, 직급, 연락처 등 **업무 시스템 필수 정보 입력 구조**
- **관리자 승인 후 계정 활성화** 방식 반영
- B2B ERP 환경에 적합한 사용자 관리 프로세스 설계

---

## 🛠 Tech Stack

### Frontend
- React 18
- TypeScript
- Vite

### UI / Styling
- Styled-components
- SCSS

### Auth / Integration
- JWT 기반 인증
- Role 기반 라우팅 제어

---

## 🔄 Transaction Management (거래 관리)

### 🧾 Estimate Registration (견적서 입력)
- 거래처 기준 견적 데이터 등록
- 다중 품목 입력 구조
- 수량 × 단가 기반 합계 금액 자동 계산
- 실무 ERP 견적서 작성 흐름을 고려한 화면 설계

---

## 🗄 Database Snapshot (Estimate Structure)

프론트엔드 견적서 입력 화면은  
실제 ERP 시스템의 **헤더–라인(1:N) 구조**를 기준으로 설계되었습니다.

### Estimate (Header)
<img src="./public/img/estimates_db.png" width="100%" />

- 견적 문서 단위 관리 테이블
- 거래처(CUSTOMER), 견적일자, 견적번호 관리
- 1건의 견적에 다수의 품목(Line) 연결 구조
- 프론트엔드 견적서 화면의 상위 문서 개념을 담당

### Estimate Lines (Detail)
<img src="./public/img/estimate_lines_db.png" width="100%" />

- 견적서 품목(Line) 단위 관리
- 단가(PRICE) × 수량(QTY) 기반 금액(AMOUNT) 계산 구조
- 프론트엔드 다중 품목 입력 UI와 1:1 매핑
- 판매·회계 전표 확장을 고려한 데이터 모델 설계

※ 본 프로젝트의 DB 테이블 및 컬럼명은  
실제 ERP 시스템 관행에 맞춰 영문으로 설계되었습니다.

---

## 🚀 Key Features

- 로그인 / 회원가입 UI 구현
- ERP 기준정보 / 거래 관리 화면 구성
- CRUD 기반 관리 화면 설계
- JWT 인증 상태 기반 접근 제어
- 사용자 권한(Role)에 따른 화면 분기
- 입력 오류를 최소화하기 위한 UX 중심 설계

---

## 🧠 Problem Solving

### 인증 상태 기반 접근 제어
- 로그인 여부 및 사용자 권한(Role)에 따른 라우팅 분기
- 화면 진입 단계에서 권한을 선제적으로 차단하여 불필요한 API 호출 방지

### ERP 업무 흐름을 고려한 화면 구성
- 기준정보 → 거래 → 회계 흐름을 기준으로 화면 구성

### 유지보수를 고려한 컴포넌트 분리
- 화면 단위 컴포넌트 분리로 가독성과 확장성 확보
- ERP 화면 특성상 기능 확장을 고려한 구조 설계

---

## ⭐ Portfolio Highlights

- ERP 기준정보 → 거래 → 회계 흐름에 대한 이해
- 실무 ERP UI 흐름을 반영한 프론트엔드 설계
- TypeScript 기반 타입 안정성 확보
- 프론트엔드 화면과 DB 구조 간 명확한 매핑 설계

---

## 👨‍💻 Developer

**이기창**  
ERP / MES 기반 웹 서비스 개발  
React (TypeScript) · Spring Boot 기반 풀스택 프로젝트

현업 업무 흐름을 이해하고,  
실제 현장에서 사용 가능한 시스템을 만드는 것을 지향합니다.
