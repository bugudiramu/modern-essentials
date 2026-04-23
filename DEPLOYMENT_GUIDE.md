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

## 2. Environment Variables Matrix

### Backend (Railway)

| Variable              | Source     | Note                               |
| :-------------------- | :--------- | :--------------------------------- |
| `DATABASE_URL`        | Supabase   | Transaction Pooler (Port 6543)     |
| `DIRECT_URL`          | Supabase   | Direct Connection (Port 5432)      |
| `REDIS_URL`           | Upstash    | Used for BullMQ                    |
| `CLERK_SECRET_KEY`    | Clerk      | Found in API Keys                  |
| `RAZORPAY_KEY_ID`     | Razorpay   | **Using Test Key**                 |
| `RAZORPAY_KEY_SECRET` | Razorpay   | **Using Test Secret**              |
| `NODE_ENV`            | Static     | `production`                       |
| `FRONTEND_URL`        | Cloudflare | Your `.pages.dev` or custom domain |

### Frontends (Cloudflare Pages)

| Variable                            | Source   | Note                                  |
| :---------------------------------- | :------- | :------------------------------------ |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk    |                                       |
| `CLERK_SECRET_KEY`                  | Clerk    | Required for Middleware               |
| `NEXT_PUBLIC_API_URL`               | Railway  | Your API URL (e.g., `https://api...`) |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID`       | Razorpay | **Using Test Key**                    |

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
