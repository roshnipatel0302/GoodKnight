# Good Knight Website - Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd goodknight-website
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: `http://localhost:3000`

---

## 📁 What's Included

### Pages
✅ **Home Page** (`/`) - Complete with hero, features, products, testimonials
✅ **Products Page** (`/products`) - Product grid with 6 items
✅ **Safety Tips Page** (`/safety`) - Comprehensive safety guide

### Components
✅ Navbar (with mobile menu)
✅ Footer (with social links)
✅ HeroSection
✅ FeatureCard
✅ ProductCard
✅ TestimonialCard

### Features
✅ Fully responsive (mobile-first)
✅ TypeScript for type safety
✅ Tailwind CSS for styling
✅ Smooth animations
✅ SEO optimized
✅ Production-ready code

---

## 🎨 Color Scheme

**Primary Green:** `#22c55e`
**Dark Green:** `#15803d`
**Light Green:** `#f0fdf4`
**Accent Yellow:** `#fbbf24`

---

## 📝 Quick Customization

### Change Brand Name
Edit `components/Navbar.tsx` and `components/Footer.tsx`:
```tsx
<span className="text-2xl font-display font-bold text-primary-800">
  Good Knight  // Change this
</span>
```

### Add New Product
Edit `lib/data.ts`:
```typescript
export const products: Product[] = [
  // Add your product here
  {
    id: 'new-product',
    name: 'Product Name',
    description: 'Short description',
    // ... more fields
  },
]
```

### Modify Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: '#YOUR_COLOR',
  },
}
```

---

## 🛠️ Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 📦 Folder Structure

```
goodknight-website/
├── app/                  # Next.js pages (App Router)
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   ├── products/        # Products page
│   └── safety/          # Safety tips page
├── components/          # Reusable components
├── lib/                 # Data and utilities
│   └── data.ts         # Product & content data
├── public/             # Static files
└── README.md           # Documentation
```

---

## 🌟 Key Features

### Animations
- Fade-in effects on page load
- Slide-up for cards
- Floating elements in hero
- Hover scale effects

### Responsive Design
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Proper heading hierarchy

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build first:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting platform.

---

## 📚 Documentation

- **README.md** - Overview and installation
- **PROJECT-GUIDE.md** - Comprehensive development guide
- **This file** - Quick start reference

---

## 🆘 Need Help?

1. Check the PROJECT-GUIDE.md for detailed explanations
2. Review component files for usage examples
3. Refer to lib/data.ts for data structure

---

## ✨ Next Steps

1. **Add Real Images**: Replace placeholders in ProductCard components
2. **Customize Content**: Edit data in `lib/data.ts`
3. **Add More Pages**: Create new folders in `app/`
4. **Integrate Backend**: Add API routes if needed
5. **Add Analytics**: Integrate Google Analytics or similar
6. **Set Up Forms**: Add contact form functionality

---

**Built with Next.js 14, TypeScript, and Tailwind CSS**

Enjoy building! 🎉
