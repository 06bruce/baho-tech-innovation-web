FROM node:20-bookworm-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY backend ./backend
COPY images ./images
COPY public ./public
COPY src ./src
COPY index.html ./
COPY postcss.config.mjs ./
COPY vite.config.ts ./
RUN npm run build

FROM node:20-bookworm-slim AS runtime

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund \
  && npm cache clean --force

COPY backend ./backend
COPY --from=build /app/dist ./dist
RUN mkdir -p /app/backend/data

ENV NODE_ENV=production
ENV PORT=3001
ENV HOST=0.0.0.0
ENV CLIENT_ORIGIN=http://localhost:5173
ENV CLIENT_ORIGINS=http://localhost:5173,http://localhost:5174
ENV SESSION_TTL_DAYS=7
ENV ADMIN_NAME="Baho Tech Admin"
ENV ADMIN_EMAIL=admin@bahotech.com
ENV ADMIN_PASSWORD=admin@2007
ENV SMTP_HOST=
ENV SMTP_PORT=587
ENV SMTP_SECURE=false
ENV SMTP_USER=
ENV SMTP_PASS=
ENV SMTP_FROM=no-reply@bahotech.com
ENV SMTP_TO=contact@bahotech.com
ENV GEMINI_API_KEY=AIzaSyAz6JMxAp7ziJSHINOQfe8obnNVM1ksmsI
ENV GEMINI_MODEL=gemini-2.5-flash

EXPOSE 3001

CMD ["npm", "run", "server"]
