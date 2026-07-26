FROM node:20-bookworm-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./
COPY frontend/package.json ./frontend/
RUN npm ci --no-audit --no-fund

COPY backend ./backend
COPY frontend/images ./frontend/images
COPY frontend/public ./frontend/public
COPY frontend/src ./frontend/src
COPY frontend/index.html ./frontend/
COPY frontend/postcss.config.mjs ./frontend/
COPY frontend/vite.config.ts ./frontend/
RUN npm run build -w frontend

FROM node:20-bookworm-slim AS runtime

WORKDIR /app

COPY package.json package-lock.json ./
COPY backend/package.json ./backend/
RUN npm ci --omit=dev --no-audit --no-fund \
  && npm cache clean --force

COPY backend ./backend
COPY --from=build /app/frontend/dist ./dist
RUN mkdir -p /app/backend/data

ENV NODE_ENV=production
ENV PORT=3001
ENV HOST=0.0.0.0
ENV CLIENT_ORIGIN=https://baho-tech-innovation-web.onrender.com
ENV CLIENT_ORIGINS=https://baho-tech-innovation-web.onrender.com
ENV SESSION_TTL_DAYS=7
ENV SMTP_PORT=587
ENV SMTP_SECURE=false
ENV SMTP_FROM=no-reply@bahotech.com
ENV SMTP_TO=contact@bahotech.com
ENV GEMINI_MODELS=gemini-2.5-flash,gemini-2.5-flash-lite

EXPOSE 3001

CMD ["npm", "start", "-w", "backend"]
