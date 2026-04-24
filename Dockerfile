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

EXPOSE 3001

CMD ["npm", "run", "server"]
