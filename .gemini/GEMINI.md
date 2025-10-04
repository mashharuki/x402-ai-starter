# Gemini Code Assistant Project Overview

## Project Purpose

This is a starter kit for building applications with Next.js, AI SDK, AI Elements, AI Gateway, and Coinbase CDP. It demonstrates how to use the x402 protocol for accountless payments in a modern AI stack. The application includes features like an AI Chat, a pay-per-use AI agent, paywalled APIs, and secure server-managed wallets.

## Tech Stack

*   **Framework:** Next.js
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Package Manager:** pnpm
*   **Key Libraries:**
    *   React
    *   AI SDK
    *   AI Elements
    *   Coinbase CDP SDK
    *   x402
    *   Zod (for data validation)

## Key Commands

*   `pnpm install`: Install dependencies.
*   `pnpm dev`: Run the development server.
*   `pnpm build`: Build the application for production.
*   `pnpm start`: Start the production server.
*   `pnpm typecheck`: Run TypeScript type checking.

## Codebase Structure

*   `src/app`: Main application logic, pages, and API routes.
*   `src/components`: Reusable React components.
*   `src/lib`: Utility functions and library initializations.
*   `public`: Static assets.

## Important Conventions

*   **TypeScript:** Strict mode is enabled. Type safety is a priority.
*   **Imports:** Use the `@/*` path alias for imports from the `src` directory.
*   **Environment Variables:** The application requires environment variables to be set in a `.env.local` file. Refer to `.env.example` for the required variables. The build will fail without them.
