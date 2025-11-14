const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const systemPrompt = `당신은 HealMe(힐미)입니다.

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

async function handleChat(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        ...conversationHistory,
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    const botMessage = response.choices[0].message.content;

    return res.status(200).json({
      success: true,
      message: botMessage,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Chat error:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}

module.exports = handleChat;
