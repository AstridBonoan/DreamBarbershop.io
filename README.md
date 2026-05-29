# DREAM Barbershop & Salon

Premium mobile-first website for [DREAM Barbershop & Salon](https://www.instagram.com/dreambarbershopandsalon/) — Queens, NYC.

**Live site:** [https://astridbonoan.github.io/DreamBarbershop.io/](https://astridbonoan.github.io/DreamBarbershop.io/)

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion

## Development

```bash
npm install
npm run dev
```

## GitHub Pages (Deploy from branch)

This repo uses **GitHub Actions** to build and push static files to the **`gh-pages`** branch.

### One-time GitHub setup

1. Push this repo to `main`.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select branch **`gh-pages`**, folder **`/ (root)`**, then **Save**.

After each push to `main`, the workflow rebuilds and updates `gh-pages` automatically.

## Customize

- Business info: `src/data/site.ts`
- Barbers, services, reviews: `src/data/`
- Booking links point to Instagram — update when you add a booking platform
