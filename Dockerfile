ARG TMDB_API_KEY

FROM node:18-alpine AS base

ENV NODE_ENV production
ENV TMDB_API_KEY=${TMDB_API_KEY}
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

FROM base AS deps
RUN apk add --no-cache libc6-compat   

WORKDIR /app
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else echo "Lockfile not found." && exit 1; fi


  
  
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN if [ -f package-lock.json ]; then npm run build; else echo "Lockfile not found." && exit 1; fi


FROM base AS runner
WORKDIR /app


RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next


COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD HOSTNAME="0.0.0.0" node server.js