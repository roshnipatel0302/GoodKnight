# Good Knight Website - Complete Development Guide

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
3. [Component Architecture](#component-architecture)
4. [Styling Guide](#styling-guide)
5. [Data Management](#data-management)
6. [Page Structure](#page-structure)
7. [Best Practices](#best-practices)

## 🎯 Project Overview

This is a production-ready Next.js 14 website for Good Knight mosquito repellent brand featuring:
- **3 Main Pages**: Home, Products, Safety Tips
- **7 Reusable Components**: Navbar, Footer, HeroSection, FeatureCard, ProductCard, TestimonialCard
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Modern UI/UX**: Smooth animations, gradients, and micro-interactions

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation Steps

```bash
# Navigate to project directory
cd goodknight-website

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🏗️ Component Architecture

### 1. Navbar Component (`components/Navbar.tsx`)

**Features:**
- Fixed position with backdrop blur
- Responsive hamburger menu for mobile
- Smooth transitions and hover effects
- Logo with shield icon
- CTA button for "Shop Now"

**Usage:**
```tsx
import Navbar from '@/components/Navbar'

// Automatically included in layout.tsx
```

**Customization:**
- Modify `navLinks` array to add/remove menu items
- Adjust colors in className (primary-600, etc.)
- Change logo icon in SVG section

### 2. Footer Component (`components/Footer.tsx`)

**Features:**
- Multi-column layout
- Social media links (Facebook, Instagram, Twitter)
- Company and support links
- Copyright section
- Responsive grid layout

**Customization:**
- Edit `footerLinks` object to modify link sections
- Update `socialLinks` array for social media
- Modify year dynamically with `{new Date().getFullYear()}`

### 3. HeroSection Component (`components/HeroSection.tsx`)

**Features:**
- Large headline with gradient text
- Dual CTA buttons
- Statistics display (24/7 Protection, 100% Safe, 25M+ Families)
- Floating animated elements
- Background pattern with blur effects

**Usage:**
```tsx
import HeroSection from '@/components/HeroSection'

<HeroSection />
```

**Animation Details:**
- `animate-fade-in`: Content fades in on load
- `animate-slide-up`: Elements slide up with delay
- `animate-float`: Continuous floating animation

### 4. FeatureCard Component (`components/FeatureCard.tsx`)

**Props:**
```typescript
interface FeatureCardProps {
  icon: React.ReactNode  // SVG icon
  title: string          // Feature title
  description: string    // Feature description
  delay?: number        // Animation delay in ms
}
```

**Usage:**
```tsx
<FeatureCard
  icon={<svg>...</svg>}
  title="Long-Lasting Protection"
  description="Continuous protection throughout the night"
  delay={100}
/>
```

### 5. ProductCard Component (`components/ProductCard.tsx`)

**Props:**
```typescript
interface ProductCardProps {
  name: string          // Product name
  description: string   // Short description
  image?: string       // Optional image URL
  href?: string        // Link destination
  delay?: number       // Animation delay
}
```

**Features:**
- Gradient background for image area
- "New" badge in top-right corner
- Hover effects with scale transformation
- "Learn More" link with arrow icon

### 6. TestimonialCard Component (`components/TestimonialCard.tsx`)

**Props:**
```typescript
interface TestimonialCardProps {
  name: string      // Customer name
  role: string      // Customer role/title
  content: string   // Testimonial text
  rating: number    // Rating (1-5)
  delay?: number    // Animation delay
}
```

**Features:**
- 5-star rating display
- Italic quote styling
- Avatar with first letter
- Gradient background for avatar

## 🎨 Styling Guide

### Color Palette

**Primary (Green):**
```javascript
50:  '#f0fdf4'  // Lightest - backgrounds
100: '#dcfce7'  // Very light
200: '#bbf7d0'  // Light
300: '#86efac'  // Medium light
400: '#4ade80'  // Medium
500: '#22c55e'  // Base green
600: '#16a34a'  // Dark (primary color)
700: '#15803d'  // Darker
800: '#166534'  // Very dark
900: '#14532d'  // Darkest - footer
```

**Accent (Yellow):**
```javascript
500: '#fbbf24'  // Base yellow
600: '#f59e0b'  // Dark yellow
```

### Typography

**Font Families:**
- Display (Headers): Georgia, Cambria, serif
- Body (Text): System fonts (SF Pro, Segoe UI, etc.)

**Font Sizes:**
```css
text-sm: 0.875rem   /* 14px */
text-base: 1rem     /* 16px */
text-lg: 1.125rem   /* 18px */
text-xl: 1.25rem    /* 20px */
text-2xl: 1.5rem    /* 24px */
text-3xl: 1.875rem  /* 30px */
text-4xl: 2.25rem   /* 36px */
text-5xl: 3rem      /* 48px */
text-6xl: 3.75rem   /* 60px */
text-7xl: 4.5rem    /* 72px */
```

### Reusable CSS Classes

**Buttons:**
```css
.btn-primary
  - Green background with white text
  - Rounded full
  - Hover: darker green with scale effect
  - Shadow effects

.btn-secondary
  - White background with green border
  - Rounded full
  - Hover: light green background
```

**Containers:**
```css
.container-custom
  - Max width: 7xl (80rem)
  - Centered with auto margins

.section-padding
  - Padding Y: 16 (mobile) to 24 (desktop)
  - Padding X: 4 to 8
```

**Cards:**
```css
.card
  - White background
  - Rounded 2xl
  - Shadow effects
  - Hover: enhanced shadow
```

### Custom Animations

**Defined in globals.css:**
```css
@keyframes fadeIn {
  0% { opacity: 0 }
  100% { opacity: 1 }
}

@keyframes slideUp {
  0% { 
    transform: translateY(20px);
    opacity: 0;
  }
  100% { 
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) }
  50% { transform: translateY(-10px) }
}
```

**Usage:**
```tsx
<div className="animate-fade-in">...</div>
<div className="animate-slide-up" style={{ animationDelay: '200ms' }}>...</div>
<div className="animate-float">...</div>
```

## 📊 Data Management

All data is centralized in `lib/data.ts`:

### Products Data

```typescript
export interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  benefits: string[]
  category: string
  image?: string
}

// 6 products included:
// 1. Liquid Vaporizer
// 2. Fast Card
// 3. Mosquito Repellent Spray
// 4. Advanced Activ+
// 5. Nature Care
// 6. Power Activ
```

### Testimonials Data

```typescript
export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
}

// 3 testimonials included
```

### Features Data

4 main features with icons and descriptions

### Safety Tips Data

4 categories of safety tips:
1. Preventing Mosquito Breeding
2. Night Protection Tips
3. Indoor Safety Tips
4. Outdoor Protection

## 📄 Page Structure

### Home Page (`app/page.tsx`)

**Sections (in order):**
1. **Hero Section**: Main headline, CTAs, stats
2. **Features Section**: 4 feature cards
3. **Product Highlights**: Top 3 products
4. **Why Choose Us**: 4 brand differentiators
5. **Testimonials**: 3 customer reviews
6. **CTA Section**: Final call-to-action

**Import Structure:**
```tsx
import HeroSection from '@/components/HeroSection'
import FeatureCard from '@/components/FeatureCard'
import ProductCard from '@/components/ProductCard'
import TestimonialCard from '@/components/TestimonialCard'
import { features, products, testimonials, whyChooseUs } from '@/lib/data'
```

### Products Page (`app/products/page.tsx`)

**Sections:**
1. Hero Banner
2. Category Filter (UI ready, functional filtering can be added)
3. Products Grid (all 6 products)
4. Benefits Banner
5. Help CTA Section

**Features:**
- Metadata for SEO
- Responsive grid layout
- Hover effects on product cards

### Safety Tips Page (`app/safety/page.tsx`)

**Sections:**
1. Hero Banner
2. Introduction Section
3. Safety Tips (4 categories)
4. Additional Resources
5. Emergency Contact Info
6. Products CTA

**Features:**
- Numbered sections
- Checkmark icons for tips
- Emergency alert box
- Responsive tip cards

## ✅ Best Practices

### 1. Component Organization

**Do:**
- Keep components small and focused
- Use TypeScript interfaces for props
- Export default for page components
- Named exports for utility components

**File Structure:**
```
Component.tsx
├── Imports
├── Interface/Type definitions
├── Component function
└── Export
```

### 2. Styling Conventions

**Do:**
- Use Tailwind utility classes
- Group related classes (layout, spacing, colors, effects)
- Use custom CSS classes for repeated patterns
- Maintain consistent spacing scale

**Example:**
```tsx
// Good
<div className="flex items-center justify-between px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">

// Avoid
<div className="bg-white flex rounded-lg shadow-md px-4 items-center hover:shadow-lg justify-between transition-shadow py-2">
```

### 3. Performance Optimization

**Do:**
- Use Next.js Image component for images
- Lazy load components when possible
- Minimize client-side JavaScript
- Use server components by default (App Router)

**Example:**
```tsx
// Add 'use client' only when needed
'use client'

import { useState } from 'react'
```

### 4. Accessibility

**Do:**
- Use semantic HTML elements
- Add ARIA labels for icons and buttons
- Ensure proper heading hierarchy
- Test keyboard navigation

**Example:**
```tsx
<button aria-label="Toggle menu" className="...">
  <svg aria-hidden="true">...</svg>
</button>
```

### 5. TypeScript Usage

**Do:**
- Define interfaces for component props
- Use type inference when possible
- Avoid `any` type
- Export types from data.ts

**Example:**
```tsx
interface CardProps {
  title: string
  description?: string  // Optional
  children: React.ReactNode
}

export default function Card({ title, description, children }: CardProps) {
  // Component logic
}
```

## 🔧 Common Customizations

### Adding a New Page

1. Create folder in `app/`:
```bash
app/
└── new-page/
    └── page.tsx
```

2. Add metadata:
```tsx
export const metadata = {
  title: 'Page Title - Good Knight',
  description: 'Page description',
}
```

3. Add to navigation in `components/Navbar.tsx`

### Modifying Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        600: '#YOUR_COLOR',
        // ... other shades
      },
    },
  },
}
```

### Adding Animation

1. Define keyframe in `globals.css`:
```css
@keyframes yourAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}
```

2. Add to Tailwind config:
```javascript
animation: {
  'your-animation': 'yourAnimation 1s ease-in-out',
}
```

3. Use in components:
```tsx
<div className="animate-your-animation">...</div>
```

## 📱 Responsive Design Tips

### Breakpoints
```javascript
sm: '640px'   // Small devices
md: '768px'   // Medium devices
lg: '1024px'  // Large devices
xl: '1280px'  // Extra large devices
```

### Mobile-First Approach
```tsx
// Base styles apply to mobile
// Add larger breakpoints as needed
<div className="
  text-base      // Mobile: 16px
  md:text-lg     // Tablet: 18px
  lg:text-xl     // Desktop: 20px
">
```

### Grid Layouts
```tsx
// 1 column mobile, 2 tablet, 3 desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

## 🚀 Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test all pages in production mode
- [ ] Check responsive design on all breakpoints
- [ ] Verify all links work
- [ ] Test performance with Lighthouse
- [ ] Add real product images
- [ ] Configure environment variables if needed
- [ ] Set up custom domain
- [ ] Enable analytics (if required)

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

---

**Happy Coding! 🎉**
