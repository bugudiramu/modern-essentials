# Modern Essentials: Production Deployment Guide (Smart Hybrid)

This document outlines the step-by-step configuration for the Modern Essentials platform using a cost-optimized, high-performance hybrid infrastructure.

---

## 🏗️ Architecture Overview

- **Database:** Supabase (PostgreSQL with Transaction Pooling)
- **Caching/Queue:** Upstash (Serverless Redis for BullMQ)
- **Object Storage:** Cloudflare R2 (Product Images & Assets)
- **Backend API:** Railway.app (NestJS Container)
- **Frontend/Admin:** Cloudflare Pages (Next.js SSR/Edge)

---

## 1. Provider Configuration

### 💎 Supabase (Database)

1. **Project:** Create a new project in the Mumbai/India region.
2. **Connection Strings:**
   - **Transaction Pooler (Port 6543):** Use this for `DATABASE_URL` in Railway.
   - **Direct Connection (Port 5432):** Use this for `DIRECT_URL` in Railway and for local migrations.
3. **SSL:** Ensure `?sslmode=require` is appended to all strings.

### ⚡ Upstash (Redis)

1. **Database:** Create a "Global" or "Regional (Mumbai)" Redis instance.
2. **Configuration:** Copy the **Redis URL** (format: `rediss://default:password@name.upstash.io:6379`).
3. **Eviction:** Ensure eviction is **disabled** (Standard for BullMQ).

### ☁️ Cloudflare (Storage & Frontends)

1. **R2 Storage:**
   - Create bucket: `modern-essentials-prod`.
   - Create API Token with `Object Read & Write` permissions.
2. **Pages (Storefront):**
   - Connect GitHub repo.
   - Root: `apps/web`.
   - Build Command: `cd ../.. && pnpm install && pnpm turbo run build --filter=@modern-essentials/web...`
   - Output: `.next`.
3. **Pages (Admin):**
   - Connect GitHub repo.
   - Root: `apps/admin`.
   - Build Command: `cd ../.. && pnpm install && pnpm turbo run build --filter=@modern-essentials/admin...`
   - Output: `.next`.

### 🚂 Railway (Backend API)

1. **Service:** Create a "New Service from Repo".
2. **Build Settings:**
   - Build Command: `pnpm install && pnpm turbo run build --filter=@modern-essentials/api...`
   - Start Command: `pnpm --filter @modern-essentials/api start`
3. **Domains:** Generate a Railway domain (e.g., `api.modern-essentials.railway.app`).

---

## 2. Environment Variable Management Strategy

To ensure a clean and secure setup, we use the following file-based strategy:

### 🏠 Local Development (`.env.local`)

- **Purpose:** Contains all secrets and configuration needed for your local machine.
- **Git Status:** **IGNORED** (Never committed to the repo).
- **Setup:** Copy `.env.example` to `.env.local` and fill in your test credentials.

### 🚀 Production Environment (`.env.production`)

- **Purpose:** Contains **non-secret** production defaults (e.g., Public API URLs, Redirect paths).
- **Git Status:** **COMMITTED** (Optional, for environment-specific defaults).
- **Note:** **SECRETS** (API Keys, DB Passwords) should **still be added to the Railway/Cloudflare UI** for maximum security. However, this file ensures that the build process always knows which URLs to use for production.

### 📋 Environment Variables Matrix

#### Backend (Railway)

| Variable           | Value in `.env.local` | Value in Platform UI |
| :----------------- | :-------------------- | :------------------- |
| `DATABASE_URL`     | Local Postgres        | Supabase Pooler      |
| `DIRECT_URL`       | Local Postgres        | Supabase Direct      |
| `REDIS_URL`        | `redis://localhost`   | Upstash URL          |
| `CLERK_SECRET_KEY` | `sk_test_...`         | `sk_live_...`        |
| `RAZORPAY_KEY_ID`  | `rzp_test_...`        | `rzp_live_...`       |

#### Frontends (Cloudflare Pages)

| Variable                            | Value in `.env.local`   | Value in Platform UI         |
| :---------------------------------- | :---------------------- | :--------------------------- |
| `NEXT_PUBLIC_API_URL`               | `http://localhost:4000` | `https://api.yourdomain.com` |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | `pk_test_...`           | `pk_live_...`                |

---

## 3. Module-Specific Setup

### Database (`packages/db`)

Before the API goes live, push the schema to Supabase:

```bash
# From local terminal
DATABASE_URL="your_supabase_direct_url" pnpm --filter @modern-essentials/db db:deploy
```

### API (`apps/api`)

The API uses a manual CORS middleware in `main.ts`. Ensure `FRONTEND_URL` and `ADMIN_URL` are set correctly in Railway so the browser doesn't block requests.

### Web (`apps/web`)

The storefront uses a **Next.js Rewrite Proxy**. Ensure `next.config.js` is updated to point `/api/*` to `process.env.NEXT_PUBLIC_API_URL`.

---

## 4. Operational Checklist

- [ ] Verify Supabase `Transaction Pooler` is active.
- [ ] Run `db:deploy` to verify connectivity.
- [ ] Trigger manual build on Cloudflare Pages.
- [ ] Check Railway Logs for `Database connected successfully`.
- [ ] Test a "Create Order" flow using Razorpay Test Mode.
