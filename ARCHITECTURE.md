# The Honest Essentials Architecture

## Overview

The Honest Essentials is a subscription-first D2C platform designed for radical transparency and operational efficiency. The system is built as a **Turborepo monorepo** to ensure type safety and code sharing across all services.

## Monorepo Structure

### Applications (`apps/`)

- **`web`**: Customer-facing storefront built with Next.js 14. Handles product discovery, subscription management, and checkout.
- **`admin`**: Internal operations dashboard for fulfillment, inventory management (FEFO logic), and customer support.
- **`api`**: Central NestJS backend service. Manages business logic, state machine transitions (subscriptions), and integrations (Razorpay, BullMQ).

### Packages (`packages/`)

- **`db`**: Prisma-based database layer. Contains the global schema and generated client.
- **`ui`**: Shared design system and UI components based on `shadcn/ui`.
- **`types`**: Common TypeScript interfaces and types used across the workspace.
- **`utils`**: Shared helper functions (currency, date, constants).
- **`email`**: React-email templates for transactional communications.
- **`config`**: Standardized configurations for ESLint, Tailwind, and TypeScript.

## Key Architectural Principles

- **Subscription-First**: The system is optimized for recurring revenue models.
- **State Machine Control**: All subscription transitions are strictly managed within the `SubscriptionService` in the API.
- **Radical Transparency**: The architecture supports batch traceability and cost breakdown logic at the product level.
- **FEFO (First Expired, First Out)**: Inventory picking logic is mandated by expiry dates to ensure freshness.
- **Idempotent Webhooks**: All external events (e.g., payments) are logged and processed exactly once.

## Design System

The visual and interactive language of The Honest Essentials is defined in the centralized Design System documentation.

- **Design System Reference**: [`planning/modern_essentials_design_system/DESIGN.md`](./planning/modern_essentials_design_system/DESIGN.md)

All UI development should adhere to the tokens and components defined in the Design System and implemented in `packages/ui`.
