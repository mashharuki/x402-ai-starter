import { agent } from '@/lib/mastra/agent';
import { MastraStream } from '@mastra/core';

export async function POST(req: Request) {
  const { message } = await req.json();

  const stream = await agent.run(message);

  return new Response(MastraStream(stream));
}
