# ERP Frontend Web Application

기업 내부 업무 프로세스를 웹 기반으로 관리하기 위한  
**ERP(Enterprise Resource Planning) 프론트엔드 웹 애플리케이션**입니다.

백엔드 API 구조를 고려하여  
**인증 흐름, 권한 제어, 화면 단위 역할 분리**를 중심으로 설계했습니다.

---

## 🔐 ERP 로그인 화면

JWT 기반 인증 흐름을 고려하여 설계한 시스템 진입 화면으로,  
인증 상태 및 사용자 권한(Role)에 따라 접근 가능한 화면이 분기됩니다.

<img width="2048" height="1302" alt="회원가입" src="https://github.com/user-attachments/assets/a159e3d6-f0c4-4576-8804-5929adfc223b" />

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
거래처 마스터 데이터를 등록·관리하는 기준정보 화면입니다.

<img width="479" height="437" alt="거래처등록" src="https://github.com/user-attachments/assets/b66c4514-d67d-4c94-af5e-ca2d0f907540" />

- 거래처 마스터 데이터 등록 및 관리  
- 매출처 / 매입처 / 매입·매출 구분 관리  
- 실제 ERP 거래처 관리 화면 흐름을 기준으로 UI 구성  

---

### 📦 품목 등록

제조·유통 ERP 품목 구조를 참고하여  
실무에서 사용되는 품목 기준정보를 관리하는 화면입니다.

<img width="483" height="493" alt="품목등록" src="https://github.com/user-attachments/assets/7fd76a29-ebfb-4689-a99b-0b2818f02dc0" />

- 원재료 / 부재료 / 제품 / 반제품 / 상품 등 품목 유형별 관리  
- 규격, 단위, 생산공정, 단가(VAT 포함 여부) 설정  
- 세트 여부 및 사용/미사용 상태 관리  
- 실제 제조·유통 ERP 품목 구조를 참고하여 설계  

---

## 🔄 거래 관리

### 🧾 판매 등록

거래처 선택 후 다수 품목을 입력하여  
판매 데이터를 등록하는 실무형 판매 관리 화면입니다.

<img width="696" height="341" alt="판매등록" src="https://github.com/user-attachments/assets/8c2e7fec-2936-4433-8603-b07bcb508c6a" />

- 거래처 선택 후 판매 품목 다중 라인 입력  
- 수량 × 단가 기반 금액 자동 계산  
- 판매 합계 금액 실시간 반영  
- 실무 ERP 판매 등록 화면 흐름을 그대로 구현  

---

### 📑 매출전표 등록

판매 데이터를 기반으로  
회계 매출전표를 자동 생성하는 화면입니다.

<img width="578" height="627" alt="매출전표등록" src="https://github.com/user-attachments/assets/c1209833-f367-411c-95d1-6f5a926d41a0" />

- 판매 데이터 기반 매출전표 생성  
- 공급가액 / 부가세 / 합계 자동 계산  
- 매출계정 / 입금계정 분리 관리  
- 차변·대변 자동 분개 미리보기 제공  
- 회계 흐름을 고려한 전표 구조 설계  

---

## 🚀 Key Features

- 로그인 및 회원 관리 화면 구현  
- ERP 대시보드 UI 구성  
- 기준정보 / 거래 관리 CRUD UI 설계  
- JWT 인증 상태 기반 접근 제어  
- 사용자 권한(Role)에 따른 화면 접근 제한  

---

## 🧠 Problem Solving

### 인증 상태 기반 화면 접근 제어 구조 설계
- 로그인 여부와 사용자 권한에 따라  
  접근 가능한 화면을 분기하는 라우팅 구조 설계  

### 백엔드 인증 흐름을 고려한 프론트엔드 연동
- JWT 토큰 만료, 권한 오류 상황을 고려한  
  화면 전환 및 접근 제어 처리  

### ERP 특성을 고려한 컴포넌트 분리
- 관리·목록·등록 화면을 단위별로 분리하여  
  가독성과 유지보수성 확보  

---

## ⭐ Portfolio Highlights

- 백엔드 인증/인가 구조를 고려한 프론트엔드 설계 경험  
- ERP 기준정보 → 거래 → 회계 흐름에 대한 이해  
- TypeScript 기반 타입 안정성 확보  
- 실제 ERP 화면 흐름을 참고한 UI/UX 구성  

---

## 👨‍💻 Developer

**이기창**  
ERP / MES 기반 웹 서비스 프론트엔드 개발  
React(TypeScript) · Spring Boot 기반 풀스택 프로젝트 진행
