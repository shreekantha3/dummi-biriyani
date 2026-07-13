# Dummi Biriyani - Hubli Cloud Kitchen 🍛

A fully static e-commerce storefront for **Dummi Biriyani**, a cloud kitchen in Hubli-Dharwad serving authentic North Karnataka biryani, chitranna, dal rice and more.

**🌐 Live Site:** Deploy on GitHub Pages in minutes

---

## Features

- ☁️ Cloud Kitchen branding with mascot logo (custom SVG)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🛒 Slide-out cart with persistent localStorage state
- 📦 12 menu items: Biryani, Rice, Combos, Family Packs, Budget meals
- ⭐ Product reviews, image galleries, related products
- 🔍 Search, filter by category/price, sort by price/rating/reviews
- 💳 Multi-step checkout with delivery time slots
- 🇮🇳 Kannada text: ನಮ್ಮ ಹುಬ್ಬಳ್ಳಿ ಡುಮ್ಮಿ ಬಿರಿಯಾನಿ
- ⚡ **100% Static** — No database, no API, no server required

---

## Deploy to GitHub Pages

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Dummi Biriyani"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dummi-biriyani.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Done!

### Step 3: Add GitHub Actions Workflow

Create `.github/workflows/nextjs.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### That's it! 

Push the workflow file and GitHub Pages will automatically build and deploy your site.

---

## Tech Stack

- **Next.js 16** with `output: 'export'` (fully static)
- **TypeScript** 
- **Tailwind CSS 4**
- **Lucide React** icons
- **Static data** — no database, no API needed

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

The static files will be in the `out/` directory — ready to deploy anywhere!

---

## Menu Items

| Item | Price | Category |
|------|-------|----------|
| Mini Donne Biryani | ₹75 | Budget |
| Lemon Chitranna | ₹80 | Rice |
| Biryani Rice | ₹85 | Rice |
| Dal Rice | ₹90 | Rice |
| Veg Pulao | ₹110 | Rice |
| Donne Biryani ⭐ | ₹120 | Biryani |
| Classic Mushroom Biryani | ₹149 | Biryani |
| Spicy Mushroom Biryani | ₹169 | Biryani |
| Mushroom Biryani Bowl | ₹179 | Bowls |
| Dummi Special Combo ⭐ | ₹199 | Combos |
| Premium Mushroom Biryani | ₹279 | Premium |
| Family Mushroom Biryani | ₹449 | Family Pack |

---

## Location & Hours

📍 Hubli-Dharwad, Karnataka  
🕐 10:00 AM – 8:00 PM (Every day)  
☁️ Cloud Kitchen — Delivery Only  

---

Made with ❤️ for Namma Hubbali
