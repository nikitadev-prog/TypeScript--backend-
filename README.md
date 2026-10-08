# Digital Business Card API

Тестовое задание: GraphQL API цифровой визитки.

Стек: NestJS, TypeScript, Prisma, PostgreSQL, GraphQL (Apollo), Docker.

Репозиторий: https://github.com/nikitadev-prog/TypeScript--backend-

## Как запустить

Нужен Docker. Из корня проекта:

```bash
docker compose up --build
```

Потом открыть http://localhost:3000/graphql — там Apollo Sandbox.

Миграции и сид данных отрабатывают сами при старте, руками ничего заполнять не нужно.

## Пример запроса

```graphql
query {
  profile {
    name
    description
    skills {
      name
    }
    experience {
      company
      position
    }
    projects {
      name
    }
  }
}
```

Можно докинуть любые поля из схемы — sandbox сам подсказывает.

## Структура

```
src/
  prisma/   — PrismaService
  profile/  — модели, resolver, service
  seed/     — заполнение данными при старте
prisma/     — схема и миграции
```

Логика примерно такая: resolver дергает service, service ходит в Prisma. Сид поднимается через SeedService, если профиля ещё нет.

## Без Docker (dev)

```bash
docker compose up db -d
cp .env.example .env
npm i
npx prisma migrate deploy
npm run start:dev 
```

`.env` смотри в `.env.example`.
