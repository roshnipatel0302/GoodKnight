# Good Knight - Mosquito Repellent Website

A modern, responsive product marketing website for Good Knight mosquito repellent brand built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **TypeScript**: Type-safe code for better development experience
- **Reusable Components**: Modular component architecture
- **SEO Optimized**: Metadata configuration for better search engine visibility
- **Performance**: Optimized for fast loading and smooth user experience

## 📁 Project Structure

```
goodknight-website/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and Tailwind directives
│   ├── products/
│   │   └── page.tsx        # Products listing page
│   └── safety/
│       └── page.tsx        # Safety tips page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── HeroSection.tsx     # Hero section for home page
│   ├── FeatureCard.tsx     # Feature card component
│   ├── ProductCard.tsx     # Product card component
│   └── TestimonialCard.tsx # Testimonial card component
├── lib/
│   └── data.ts             # Data for products, testimonials, features, etc.
├── public/                 # Static assets (images, icons, etc.)
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project dependencies
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: System fonts with custom display font (Georgia/Cambria)
- **Icons**: SVG icons

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open browser**:
Navigate to `http://localhost:3000`

## 🎨 Design System

### Colors
- **Primary Green**: `#22c55e` (Primary-600)
- **Dark Green**: `#15803d` (Primary-700)
- **Light Green**: `#f0fdf4` (Primary-50)
- **Accent Yellow**: `#fbbf24` (Accent-500)

### Typography
- **Display Font**: Georgia, Cambria (serif)
- **Body Font**: System fonts (SF Pro, Segoe UI)

### Components

#### Navbar
- Fixed navigation with transparency effect
- Mobile responsive hamburger menu
- Smooth scroll behavior

#### HeroSection
- Large headline with gradient text effect
- Call-to-action buttons
- Animated floating elements
- Statistics display

#### FeatureCard
- Icon with gradient background
- Hover scale effect
- Clean typography

#### ProductCard
- Product image placeholder
- Description and benefits
- "Learn More" link with arrow icon

#### TestimonialCard
- 5-star rating system
- Customer avatar
- Quote styling

## 📄 Pages

### Home Page (/)
Sections:
1. Hero Section - Main value proposition
2. Features Section - 4 key features
3. Product Highlights - Top 3 products
4. Why Choose Us - Brand differentiators
5. Testimonials - Customer reviews
6. CTA Section - Final call-to-action

### Products Page (/products)
- Hero banner
- Category filters
- Product grid (6 products)
- Benefits section
- Contact CTA

### Safety Tips Page (/safety)
- Hero banner
- Introduction
- 4 categories of safety tips
- Additional resources
- Emergency contact info
- Products CTA

## 🔧 Customization

### Adding New Products
Edit `lib/data.ts` and add new product objects:

```typescript
{
  id: 'product-id',
  name: 'Product Name',
  description: 'Short description',
  longDescription: 'Detailed description',
  benefits: ['Benefit 1', 'Benefit 2'],
  category: 'category-name',
}
```

### Changing Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  primary: {
    // Your custom green shades
  },
}
```

### Adding Pages
Create new folders in the `app` directory with a `page.tsx` file:

```bash
app/
└── new-page/
    └── page.tsx
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✨ Key Features Implementation

### Animations
- Fade-in effects on page load
- Slide-up animations for cards
- Floating animations for hero elements
- Hover scale effects on interactive elements

### Accessibility
- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Proper heading hierarchy

### Performance
- Optimized images (placeholders ready for real images)
- Code splitting with Next.js App Router
- CSS optimization with Tailwind

## 🎯 Future Enhancements

- [ ] Add real product images
- [ ] Implement shopping cart functionality
- [ ] Add product detail pages
- [ ] Integrate with CMS for content management
- [ ] Add contact form
- [ ] Implement search functionality
- [ ] Add blog section
- [ ] Multi-language support

## 📝 License

This project is created for demonstration purposes.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using Next.js and Tailwind CSS**
