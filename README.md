# N7 — Digital Banking Platform

A modern landing page for N7, a digital banking platform built for financial institutions. Core banking, digital banking, open banking, and loan management — all out of the box.

## Tech Stack

- [React 19](https://react.dev/) — UI framework
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [Vite 8](https://vite.dev/) — build tool and dev server
- [react-icons](https://react-icons.github.io/react-icons/) — icon library
- [usehooks-ts](https://usehooks-ts.com/) — React hooks utilities

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

```bash
git clone <repo-url>
cd n7
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
npm run preview
```

Build output goes to `dist/`.

### Lint

```bash
npm run lint
```

## Project Structure

```
n7/
├── public/
│   ├── assets/
│   │   ├── icons/          # star, blade, check icons
│   │   └── images/         # logos, phone mockups, backgrounds
│   ├── favicon.svg
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── _header.jsx         # sticky navigation bar
│   │   ├── _hero.jsx           # hero section with CTA
│   │   ├── _solutions.jsx      # solutions overview
│   │   ├── _coreBanking.jsx    # core banking features
│   │   ├── _digitalBanking.jsx # digital banking with phone mockups
│   │   ├── _paperlessCta.jsx   # paperless transformation banner
│   │   ├── _insights.jsx       # blog posts and articles
│   │   ├── _case-studies.jsx   # testimonials and case studies
│   │   └── _footer.jsx         # office locations, links, socials
│   ├── App.jsx                 # root component
│   ├── main.jsx                # entry point
│   └── index.css               # global styles and Tailwind imports
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Page Sections

| Section         | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| Header          | Sticky nav with logo, links, and request demo CTA             |
| Hero            | Headline, subtext, and call-to-action with background imagery |
| Solutions       | Overview of all N7 banking solutions                          |
| Core Banking    | Core banking capabilities and highlights                      |
| Paperless CTA   | Promotional banner for paperless transformation               |
| Digital Banking | Feature grid with phone mockups and bullet lists              |
| Insights        | Latest blog posts and industry articles                       |
| Case Studies    | Client testimonials and success stories                       |
| Footer          | Office locations, navigation, socials, and copyright          |

## Brand Colors

| Name  | Hex       | Usage                            |
| ----- | --------- | -------------------------------- |
| Cyan  | `#00B4FD` | Primary accent, gradients, links |
| Blue  | `#003ACE` | Gradient end, deep accent        |
| Dark  | `#021015` | Footer background, dark surfaces |
| Light | `#eaf8ff` | Section backgrounds              |
