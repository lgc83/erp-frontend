# ERP Frontend Web Application

기업 내부 업무 프로세스를 웹 기반으로 관리하기 위한  
**ERP(Enterprise Resource Planning) 프론트엔드 웹 애플리케이션**입니다.

백엔드 API 구조를 고려하여  
**인증 흐름, 권한 제어, 화면 단위 역할 분리**를 중심으로 설계했습니다.

---

## 🔐 ERP 로그인 / 사용자 등록

JWT 기반 인증 흐름을 고려한 시스템 진입 화면으로,  
관리자 승인 기반 사용자 등록 구조를 설계했습니다.

<img src="./login.png" style="max-width:100%; height:auto;" />

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
- JWT 기반 인증 연동
- 권한(Role) 기반 라우팅 처리

### Development
- ESLint
- Prettier

---

## 📁 기준정보 관리

### 🔗 거래처 등록

영업·구매·회계 전반에서 공통으로 참조되는  
거래처 마스터 데이터를 관리하는 화면입니다.

<img src="./거래처등록.png" style="max-width:100%; height:auto;" />

**주요 기능**
- 거래처 마스터 데이터 등록 및 관리
- 매출처 / 매입처 / 매입·매출 구분 관리
- ERP 기준 데이터 구조를 고려한 UI 설계

---

### 📦 품목 등록

제조·유통 ERP 품목 구조를 반영한  
품목 기준정보 관리 화면입니다.

<img src="./품목등록.png" style="max-width:100%; height:auto;" />

**주요 기능**
- 원재료 / 부재료 / 제품 / 반제품 / 상품 유형 관리
- 규격, 단위, 생산공정, 단가(VAT 포함 여부) 설정
- 세트 여부 및 사용/미사용 상태 관리

---

## 🔄 거래 관리

### 🧾 판매 등록

거래처 선택 후 다수 품목을 입력하여  
판매 데이터를 등록하는 실무형 화면입니다.

<img src="./판매등록.png" style="max-width:100%; height:auto;" />

**주요 기능**
- 판매 품목 다중 라인 입력
- 수량 × 단가 자동 계산
- 합계 금액 실시간 반영

---

### 📑 매출전표 등록

판매 데이터를 기반으로  
회계 매출전표를 자동 생성하는 화면입니다.

<img src="./매출전표등록.png" style="max-width:100%; height:auto;" />

**주요 기능**
- 공급가액 / 부가세 / 합계 자동 계산
- 매출계정 / 입금계정 분리 관리
- 차변·대변 자동 분개 미리보기 제공
- 회계 흐름을 고려한 전표 구조 설계

---

## 🚀 Key Features

- 로그인 및 사용자 승인 기반 인증 구조
- ERP 기준정보 / 거래 / 회계 흐름 UI 구현
- JWT 인증 상태 기반 접근 제어
- 사용자 권한(Role)에 따른 화면 접근 제한

---

## 🧠 Problem Solving

### 인증 상태 기반 화면 접근 제어
- 로그인 여부 및 사용자 권한에 따른 라우팅 분기

### ERP 구조를 고려한 UI 설계
- 기준정보 → 거래 → 회계 흐름을 고려한 화면 구성

### 유지보수 가능한 컴포넌트 분리
- 관리 / 등록 / 목록 화면 단위 분리 설계

---

## ⭐ Portfolio Highlights

- ERP / 회계 흐름에 대한 이해를 기반으로 한 프론트엔드 설계
- TypeScript 기반 타입 안정성 확보
- 실무 ERP 화면 구조를 참고한 UI/UX 구현

---

## 👨‍💻 Developer

**이기창**  
ERP · MES 기반 웹 서비스 개발  
React(TypeScript) · Spring Boot 기반 풀스택 프로젝트
