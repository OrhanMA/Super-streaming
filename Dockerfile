ARG TMDB_API_KEY

FROM node:18-alpine AS base


ENV TMDB_API_KEY=${TMDB_API_KEY}
ENV NEXT_TELEMETRY_DISABLED 1

FROM base AS deps
RUN apk add --no-cache libc6-compat   

WORKDIR /app
COPY package.json package-lock.json* ./

RUN npm install
RUN npm install sharp
  
  
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN --mount=type=secret,id=TMDB_API_KEY \
  export TMDB_API_KEY=$(cat /run/secrets/TMDB_API_KEY) && \
  npm run build


FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown -R nextjs:nodejs .next
RUN chown -R nextjs:nodejs public


COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]