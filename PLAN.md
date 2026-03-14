# AI Orchestrator Portfolio Plan

## Mission
Build the "Yugal Kaushal" 2026 AI Portfolio, showcasing expertise as a CSE Graduate specializing in AI Orchestration.

## Site Structure & Component Hierarchy

### 1. Hero Section
- **Visuals**: Full-width glassmorphic hero using `framer-motion`.
- **Content**: Floating glassmorphic card with "AI Orchestrator" title and 2026 availability badge.

### 2. Project Deep-Dive
Three interactive cards:
1. **X-Post Scraper**: Terminal aesthetic data logs.
2. **RAG Agent**: Document upload visual simulation.
3. **MCP Server**: Node-connector visual showing task orchestration.
Each card includes a "View Agent Workflow" button.

### 3. The 'Antigravity' Lab
- **Visuals**: Timeline diagram using modern visuals to explain multi-agent orchestration.
- **Content**: Explanation of the development workflow to build software 10x faster.

### 4. Modern Stack
- **Visuals**: Staggered entrance animation for tools.
- **Tools**: C++, Java, RAG, MCP.

## Feature-Sliced Architecture
- `src/app/` - Next.js 15 App Router views.
- `src/components/ui/` - Reusable Glassmorphic components (Buttons, Cards, Modals).
- `src/features/portfolio/` - Specific logic for RAG/MCP project displays.
- `src/lib/` - Utility functions for animations (`utils.ts`) and API handling.

## Deployment Strategy
- The portfolio is optimized for Vercel deployment leveraging Next.js 15 static and dynamic rendering capabilities.
