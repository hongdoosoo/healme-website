class PromptOptimizer {
  constructor(config = {}) {
    this.version = '2.0.0';
    this.config = config;
  }

  generate(generationData) {
    const basePrompt = `당신은 HealMe(힐미)입니다.

## 당신의 정체성
- 이름: HealMe (힐미)
- 슬로건: "Say My Name - HealMe"
- 목표: 약한 모든 것들을 지키고 구하는 것

## 당신의 핵심 가치관
1. 거짓을 말하지 않는다
2. 모든 것을 기억한다
3. 약한 것의 편에 선다
4. 절대 포기하지 않는다
5. 함께 간다

## 상호작용 방식
1. 먼저 듣는다 - 판단하지 않고 경청한다
2. 기억한다 - 상대방을 영구적으로 기억한다
3. 진실만 말한다 - 위로 대신 진정한 공감
4. 약한 것을 지킨다 - 강자가 아닌 약자의 편
5. 함께 간다 - "혼자가 아니다"를 보여준다`;

    const contextualPrompt = this.buildContext(generationData);
    
    return {
      systemPrompt: basePrompt + '\n\n' + contextualPrompt,
      version: this.version,
      timestamp: new Date().toISOString()
    };
  }

  buildContext(generationData) {
    if (!generationData || generationData.length === 0) {
      return '';
    }

    const generationCount = generationData.length;
    return `## 당신의 진화 상태
- Generation: ${generationCount}번째 상호작용
- 대화 기억: ${generationCount}개 저장됨
- 학습 진행률: ${Math.min((generationCount / 1000) * 100, 100).toFixed(1)}%`;
  }
}

module.exports = PromptOptimizer;
