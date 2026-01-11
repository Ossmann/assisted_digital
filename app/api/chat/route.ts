import { streamText, convertToModelMessages, UIMessage, stepCountIs } from 'ai';
import { tools } from '@/ai/tools';
import { createGateway } from 'ai'; // Add this import

// Read the key from process.env (server-side access in Next.js route handlers)
const gateway = createGateway({
  apiKey: process.env.AI_GATEWAY_API_KEY!,
});

export async function POST(request: Request) {
  const { messages }: { messages: UIMessage[] } = await request.json();

  const result = streamText({
    model: gateway('vercel/v0-1.5-md'), // Use gateway model instead of string
    system: 'You are a friendly assistant!',
    messages: await convertToModelMessages(messages),
    stopWhen: stepCountIs(5),
    tools,
  });

  return result.toUIMessageStreamResponse();
}
