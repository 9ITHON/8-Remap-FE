# 8-RE:MAP-FE (Next.js App Router 기반 프론트엔드)

---

# 🗂️ 프로젝트 개요

- **Framework**: Next.js (App Router, TypeScript)
- **스타일**: CSS Modules, PostCSS, Prettier
- **품질 관리**: ESLint, Prettier

---

# 💬 Git 커밋 규칙

## ✉️ 메시지 형식

```
[브랜치] 타입: 간단한 요약 (명령형)
```

### 타입 목록

- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 작업
- **refactor**: 코드 리팩토링 (동작 유지)
- **style**: 포맷팅, 스타일 변경 (로직 영향 없음)
- **test**: 테스트 코드 작성/수정
- **chore**: 빌드, 설정 등 기타 작업

#### 예시

```
[feature/23-login-api] feat: 로그인 API 연동
[hotfix] fix: production 빌드 오류 수정
[docs] docs: README 초기 작성
```

---

# 🌿 브랜치 관리

- **main**: 운영/배포 브랜치
- **feature/이슈번호-간단설명**: 새로운 기능 개발
- **hotfix/간단설명**: 긴급 수정

> 모든 feature 브랜치는 PR을 통해 main에 병합하며, 리뷰 후 머지합니다.

---

# 🐞 이슈 작성 규칙

## 제목 규칙

```
[태그] 핵심 요약
```

### 태그 종류

- `[feature]`: 기능 추가
- `[bug]`: 버그 리포트
- `[improvement]`: 개선 작업
- `[docs]`: 문서 작성/수정
- `[test]`: 테스트 관련
- `[chore]`: 기타 작업
- `[hotfix]`: 긴급 수정

#### 예시

```
[feature] OAuth 로그인 기능 추가
[bug] 모바일 레이아웃 깨짐 현상
```

## 본문 작성 템플릿

```
## 개요
- 문제 상황 혹은 작업 목적 요약

## 작업 내용
- [ ] 할 일 1
- [ ] 할 일 2

## 참고
- 관련 스크린샷, 레퍼런스 링크 등
```

---

# 📁 프로젝트 구조

```
.
├── app
│   ├── (router)           # 라우트 그룹 디렉토리
│   ├── layout.tsx         # 전역 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 전역 스타일
│
├── components             # 공통 컴포넌트 모음
│
├── public                 # 정적 파일 (이미지, 아이콘 등)
│
├── .gitignore             # Git 제외 목록
├── .prettierrc            # Prettier 설정
├── eslint.config.mjs      # ESLint 설정
├── next-env.d.ts          # Next.js 타입 선언
├── next.config.ts         # Next.js 설정
├── package.json           # 프로젝트 의존성 및 스크립트
├── package-lock.json      # 의존성 버전 고정
├── postcss.config.mjs     # PostCSS 설정
├── README.md              # 프로젝트 문서
├── tsconfig.json          # TypeScript 컴파일 설정
```

---

# ✅ 요약

- **커밋**: `[브랜치] 타입: 메시지` 형식, 타입은 소문자
- **브랜치**: 목적별 분리, PR 기반 병합
- **이슈**: 태그와 본문 템플릿 활용
- **구조**: App Router 기반, 역할별 모듈화 설계

---

💬 PR 규칙, 리뷰 프로세스, 코드 스타일 규칙 등 추가 세부 규칙도 필요하면 알려주세요!
