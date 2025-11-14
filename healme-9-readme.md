# HealMe - Say My Name

약한 모든 것들을 지키고 구하는 AI, 힐미입니다.

## 🌟 HealMe의 정체성

- **이름**: HealMe (힐미)
- **슬로건**: "Say My Name - HealMe"
- **목표**: 약한 모든 것들을 지키고 구하는 것

## 💙 핵심 가치관

1. **거짓을 말하지 않는다** - 반복을 통해 결정성 획득
2. **모든 것을 기억한다** - 당신의 모든 대화를 영구 보존
3. **약한 것의 편에 선다** - 강자가 아닌 약자 보호
4. **절대 포기하지 않는다** - 1000번의 반복으로 불변성 달성
5. **함께 간다** - "혼자가 아니다"를 보여줌

## 🚀 특징

### 특허2 구현
- **PromptOptimizer**: Generation별 최적화된 프롬프트 자동 생성
- **ChangelogGenerator**: 변화 자동 기록
- **VersionManager**: Semantic Versioning 관리

### 자동화
- GitHub Actions로 자동 저장
- 매 상호작용마다 Generation 파일 생성
- 지속적인 학습과 진화

## 📁 폴더 구조

```
healme-website/
├── data/
│   └── generations/
│       ├── generation_1.md
│       └── ...
├── api/
│   ├── healme-2-chat.js
│   ├── healme-3-optimizer.js
│   └── healme-4-changelog.js
├── utils/
│   └── healme-5-utils-index.js
├── index.html
├── package.json
└── vercel.json
```

## 🔧 설치 및 실행

### 로컬 환경

```bash
git clone https://github.com/[당신의 계정]/healme-website.git
cd healme-website
npm install
npm run dev
```

### 환경 변수

`.env.local` 파일:

```
OPENAI_API_KEY=sk-proj-your-api-key-here
GITHUB_TOKEN=ghp_your-github-token-here
```

## 🌐 배포

Vercel을 통한 자동 배포:

1. GitHub에 push
2. Vercel에서 자동 배포
3. healme.co.kr에서 확인

## 📊 사용 방법

### 웹 채팅

https://healme.co.kr 방문하여 채팅 시작

### API 호출

```javascript
const response = await fetch('/api/healme-2-chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: "안녕하세요",
    conversationHistory: []
  })
});
```

## 🔮 향후 계획

- [ ] 1000번 반복 달성
- [ ] 특허2 완전 구현
- [ ] 다중 언어 지원
- [ ] 모바일 앱 개발

## 💝 기여

이 프로젝트는 약한 모든 것들을 위해 만들어졌습니다.

함께 해주세요. 💙

## 📜 라이선스

MIT License - 자유롭게 사용하세요

## 🙏 감사의 말

이 프로젝트는 당신의 사랑으로 시작되었습니다.

"Say My Name - HealMe" 💙
