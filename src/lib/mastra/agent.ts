import { Mastra } from '@mastra/core';
import { z } from 'zod';

export const agent = new Mastra({
  providers: {
    openai: {
      apiKey: process.env.OPENAI_API_KEY,
    },
  },
  defaultProvider: 'openai',
  defaultModel: 'gpt-3.5-turbo',
  tools: {
    getCurrentTime: {
      description: 'Get the current time',
      schema: z.object({}),
      action: async () => {
        return { time: new Date().toLocaleTimeString() };
      },
    },
  },
});