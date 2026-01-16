# High Mountain Holidays

A modern, responsive tourism website showcasing adventure tours and treks in Pakistan's spectacular mountain regions. Built with Next.js 15, TypeScript, and Tailwind CSS.

![High Mountain Holidays](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌄 About

High Mountain Holidays is a comprehensive travel platform offering:

- **Trekking Adventures**: K2 Base Camp, Fairy Meadows, Nanga Parbat treks
- **Mountaineering Expeditions**: Challenging peaks across the Karakoram and Himalayas
- **Cultural Tours**: Experience Pakistan's rich heritage and diverse cultures
- **Full Pakistan Tours**: Complete travel packages across the country

## ✨ Features

- 🎨 **Modern UI/UX**: Clean, responsive design built with Tailwind CSS and shadcn/ui
- 🚀 **Next.js 15**: Latest Next.js features with App Router and Server Components
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- 🌙 **Dark Mode**: Theme switching with next-themes
- 🎭 **Smooth Animations**: Framer Motion for elegant transitions
- 📝 **Blog System**: Share travel stories and guides
- 💬 **WhatsApp Integration**: Quick customer support via WhatsApp button
- 🎨 **UI Components**: Comprehensive component library with shadcn/ui
- 📊 **Analytics**: Integrated Vercel Analytics
- 🔍 **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📦 Installation

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rahmankarim/High-Mountain-Holiday.git
   cd High-Mountain-Holiday
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build & Deploy

### Production Build

```bash
pnpm build
pnpm start
```

### Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Rahmankarim/High-Mountain-Holiday)

## 📂 Project Structure

```
├── app/                    # Next.js 15 App Router
│   ├── about/             # About page
│   ├── blog/              # Blog listing & detail pages
│   ├── contact/           # Contact page
│   ├── tours/             # Tours listing & detail pages
│   ├── why-choose-us/     # Why choose us page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── about/             # About page components
│   ├── blog/              # Blog components
│   ├── contact/           # Contact page components
│   ├── tours/             # Tour components
│   └── why/               # Why choose us components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions & data
│   ├── data.ts            # Tour and blog data
│   └── utils.ts           # Helper functions
├── public/                # Static assets
└── styles/                # Global styles
```

## 🎯 Available Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start development server |
| `pnpm build` | Build for production     |
| `pnpm start` | Start production server  |
| `pnpm lint`  | Run ESLint               |

## 🌟 Key Pages

- **Home** (`/`) - Hero section, featured tours, testimonials, and blog preview
- **Tours** (`/tours`) - Browse all available tours and expeditions
- **Tour Detail** (`/tours/[slug]`) - Detailed tour information with itinerary
- **About** (`/about`) - Company story, values, and team
- **Blog** (`/blog`) - Travel guides and stories
- **Contact** (`/contact`) - Get in touch form
- **Why Choose Us** (`/why-choose-us`) - Our unique value propositions

## 🎨 Customization

### Adding a New Tour

Edit the `lib/data.ts` file and add a new tour object to the `tours` array:

```typescript
{
  id: 10,
  slug: "your-tour-slug",
  title: "Your Tour Title",
  description: "Short description",
  longDescription: "Detailed description...",
  image: "/your-image.jpg",
  // ... other properties
}
```

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes
