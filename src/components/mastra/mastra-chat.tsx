'use client';

import { useChat } from '@ai-sdk/react';

export default function MastraChat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/mastra',
  });

  return (
    <div>
      <div>
        {messages.map(m => (
          <div key={m.id}>
            <strong>{m.role === 'user' ? 'User: ' : 'AI: '}{m.role === 'tool' && `(Tool Call: ${m.tool_name})`}</strong>
            <pre>{m.content}</pre>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}