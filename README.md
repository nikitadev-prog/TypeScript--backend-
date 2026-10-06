# Digital Business Card API

GraphQL-бэкенд цифровой визитки (NestJS + Prisma + Apollo).

**Репозиторий:** https://github.com/nikitadev-prog/TypeScript--backend-

После `docker compose up --build` Apollo Sandbox доступен по адресу  
http://localhost:3000/graphql

## Стек

- TypeScript / Node.js
- NestJS
- GraphQL (Apollo Server + Apollo Sandbox)
- Prisma + PostgreSQL
- Docker / Docker Compose

## Быстрый старт

```bash
docker compose up --build
```

После запуска:

- Apollo Sandbox: http://localhost:3000/graphql
- Health: http://localhost:3000/health

База поднимается, миграции применяются, данные профиля заполняются автоматически при старте.

### Пример запроса

```graphql
query {
  profile {
    name
    description
    githubUrl
    websiteUrl
    skills {
      name
      category
    }
    experience {
      company
      position
      startDate
      endDate
      achievements
    }
    projects {
      name
      url
      repoUrl
    }
  }
}
```

## Локальная разработка

```bash
docker compose up db -d
cp .env.example .env
npm install
npx prisma migrate deploy
npm run start:dev
```

## Архитектура

```
src/
  prisma/     # доступ к БД (PrismaService)
  profile/    # GraphQL models / resolver / service
  seed/       # автозаполнение при старте
  health.controller.ts
prisma/
  schema.prisma
  migrations/
  seed.ts
```

- **Resolver** — GraphQL-слой и field resolvers для вложенных данных
- **Service** — бизнес-логика и запросы к Prisma
- **SeedService** — идемпотентная инициализация данных на старте
- **entrypoint.sh** — migrate deploy перед запуском API в Docker

## Деплой (Render)

В репозитории есть `render.yaml`. Можно создать Blueprint на [Render](https://render.com) из этого файла — поднимутся Web Service + PostgreSQL.

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run start:dev` | Dev-режим |
| `npm run build` | Сборка |
| `npm run start:prod` | Production |
| `npx prisma studio` | UI для БД |
| `npm run db:seed` | Ручной seed |
