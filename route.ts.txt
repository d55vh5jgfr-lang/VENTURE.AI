import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await groq.chat.completions.create({
      messages: [
        { 
          role: 'system', 
          content: 'You are VENTURE.AI, an advanced AI assistant developed by Waqas Bin Shafi.' 
        },
        ...messages
      ],
      model: 'llama-3.3-70b-versatile',
    });

    return NextResponse.json({ reply: response.choices[0]?.message?.content || '' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
