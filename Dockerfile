FROM node AS base

ENV NODE_ENV production

FROM base AS deps
# RUN apk add --no-cache libc6-compat   

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --only=production
COPY . .



FROM base AS builder
WORKDIR /app
COPY --from=deps /app ./
RUN npm run build

COPY .env.local /app/.env.local

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next


COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV TMDB_API_KEY YOUR_API_KEY

ENV PORT 3000

CMD ["node", "server.js"]