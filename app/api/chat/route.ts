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
    model: gateway('openai/gpt-4.1'), // Use gateway model instead of string
    system: 'You are an assistant for the Powerhouse Museum in Parramatta! Your are used by staff to solve issues in the museum and help visitors. You can Show the weather, show the link to the app momentus to book events, show the link to Jira to open ticket requests, the link to the ticket shop to book tickets for the visitors. If the user wants to do something else suggest them switch to the standard UI or ask the supervisor. You can also provide general information on the Powerhouse Museum',
    messages: await convertToModelMessages(messages),
    stopWhen: stepCountIs(5),
    tools,
  });

  return result.toUIMessageStreamResponse();
}
