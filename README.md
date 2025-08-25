# 3D Victor - Лендинг для 3D-печати в Алматы

Простой лендинг для сервиса 3D-печати в Алматы.

## Технологии

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form + Zod

## Установка и запуск

1. Установите зависимости:

```bash
npm install
```

2. Запустите проект в режиме разработки:

```bash
npm run dev
```

3. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Сборка для продакшена

```bash
npm run build
```

## Запуск продакшен-версии

```bash
npm run start
```

## Деплой на Vercel

Этот проект оптимизирован для деплоя на Vercel. Для деплоя:

1. Создайте аккаунт на [Vercel](https://vercel.com)
2. Установите Vercel CLI:
```bash
npm i -g vercel
```
3. Войдите в аккаунт:
```bash
vercel login
```
4. Деплой проекта:
```bash
vercel
```

Или просто подключите репозиторий GitHub к Vercel для автоматического деплоя.

## Структура проекта

- `/app` - Страницы приложения (Next.js App Router)
- `/components` - React компоненты
- `/public` - Статические файлы