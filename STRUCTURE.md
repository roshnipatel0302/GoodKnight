# Good Knight Website - Project Structure

```
goodknight-website/
│
├── 📱 app/                          # Next.js App Router
│   │
│   ├── 🏠 page.tsx                  # HOME PAGE
│   │   ├── HeroSection              # Sleep Peacefully. Stay Protected.
│   │   ├── Features (4 cards)       # Long-lasting, Safe, Easy, Trusted
│   │   ├── Products (3 cards)       # Vaporizer, Fast Card, Spray
│   │   ├── Why Choose Us (4 items)  # Scientific, Kid-safe, Affordable, Eco
│   │   ├── Testimonials (3 cards)   # Customer reviews
│   │   └── CTA Section              # Ready for Mosquito-Free Nights?
│   │
│   ├── 🛍️ products/
│   │   └── page.tsx                 # PRODUCTS PAGE
│   │       ├── Hero Banner          # Our Products
│   │       ├── Category Filter      # All, Vaporizers, Sprays, Natural
│   │       ├── Product Grid (6)     # All products displayed
│   │       ├── Benefits Section     # What every product offers
│   │       └── Help CTA             # Need Help Choosing?
│   │
│   ├── 🛡️ safety/
│   │   └── page.tsx                 # SAFETY TIPS PAGE
│   │       ├── Hero Banner          # Safety Tips
│   │       ├── Introduction         # Why prevention matters
│   │       ├── Prevention Tips      # 4 categories of tips
│   │       ├── Resources            # Additional measures
│   │       ├── Emergency Info       # Medical emergency contact
│   │       └── CTA Section          # Protect Your Family Today
│   │
│   ├── layout.tsx                   # Root Layout (wraps all pages)
│   │   ├── <Navbar />              # Fixed navigation
│   │   ├── <main>{children}</main> # Page content
│   │   └── <Footer />              # Site footer
│   │
│   └── globals.css                  # Global Styles
│       ├── Tailwind directives      # @tailwind base/components/utilities
│       ├── Custom CSS classes       # .btn-primary, .card, etc.
│       ├── Animations               # @keyframes definitions
│       └── Scrollbar styles         # Custom scrollbar
│
├── 🧩 components/                   # Reusable UI Components
│   │
│   ├── Navbar.tsx                   # NAVIGATION BAR
│   │   ├── Logo + Brand name        # Good Knight with shield icon
│   │   ├── Desktop menu             # Home, Products, Safety Tips
│   │   ├── Mobile hamburger         # Responsive menu
│   │   └── CTA button               # Shop Now
│   │
│   ├── Footer.tsx                   # SITE FOOTER
│   │   ├── Brand section            # Logo, description, socials
│   │   ├── Company links            # Navigation links
│   │   ├── Support links            # Contact, FAQs, Privacy
│   │   └── Copyright                # © 2026 Good Knight
│   │
│   ├── HeroSection.tsx              # HOME PAGE HERO
│   │   ├── Badge                    # "Trusted Protection Since 1995"
│   │   ├── Headline                 # Large gradient text
│   │   ├── Subtext                  # Value proposition
│   │   ├── CTA buttons              # Explore Products, Safety Tips
│   │   ├── Stats                    # 24/7, 100%, 25M+
│   │   ├── Product visual           # Floating product placeholder
│   │   └── Decorative elements      # Moon, star icons
│   │
│   ├── FeatureCard.tsx              # FEATURE DISPLAY CARD
│   │   ├── Icon (gradient bg)       # SVG icon with green gradient
│   │   ├── Title                    # Feature name
│   │   ├── Description              # Feature details
│   │   └── Hover effect             # Scale on hover
│   │
│   ├── ProductCard.tsx              # PRODUCT DISPLAY CARD
│   │   ├── Image area               # Gradient background + icon
│   │   ├── "New" badge              # Yellow badge
│   │   ├── Product name             # Title
│   │   ├── Description              # Short description
│   │   └── "Learn More" link        # With arrow icon
│   │
│   └── TestimonialCard.tsx          # CUSTOMER REVIEW CARD
│       ├── Star rating              # 5-star display
│       ├── Quote                    # Customer testimonial
│       ├── Avatar                   # Circle with first letter
│       └── Author info              # Name and role
│
├── 📚 lib/                          # Data & Utilities
│   │
│   └── data.ts                      # ALL CONTENT DATA
│       ├── products[]               # 6 products with details
│       │   ├── Liquid Vaporizer     # All-night protection
│       │   ├── Fast Card            # Instant action
│       │   ├── Mosquito Spray       # Outdoor protection
│       │   ├── Advanced Activ+      # Next-gen protection
│       │   ├── Nature Care          # Natural ingredients
│       │   └── Power Activ          # Maximum strength
│       │
│       ├── testimonials[]           # 3 customer reviews
│       │   ├── Priya Sharma         # Mother of Two
│       │   ├── Rajesh Kumar         # IT Professional
│       │   └── Anita Desai          # Homemaker
│       │
│       ├── features[]               # 4 main features
│       │   ├── Long-Lasting         # Continuous protection
│       │   ├── Safe for Family      # Dermatologically tested
│       │   ├── Easy to Use          # Simple plug-and-play
│       │   └── Trusted Brand        # 25+ years experience
│       │
│       ├── whyChooseUs[]            # 4 differentiators
│       │   ├── Scientifically Tested
│       │   ├── Kid-Safe Formulas
│       │   ├── Affordable Protection
│       │   └── Eco-Friendly
│       │
│       └── safetyTips[]             # 4 categories
│           ├── Preventing Breeding   # 6 tips
│           ├── Night Protection      # 6 tips
│           ├── Indoor Safety         # 7 tips
│           └── Outdoor Protection    # 5 tips
│
├── ⚙️ Configuration Files
│   ├── package.json                 # Dependencies & scripts
│   ├── tsconfig.json                # TypeScript config
│   ├── tailwind.config.js           # Tailwind customization
│   │   ├── Custom colors            # Primary green shades
│   │   ├── Custom fonts             # Display & body fonts
│   │   └── Custom animations        # fadeIn, slideUp, float
│   ├── next.config.js               # Next.js config
│   ├── postcss.config.js            # PostCSS config
│   └── .gitignore                   # Git ignore rules
│
└── 📖 Documentation
    ├── README.md                    # Project overview
    ├── PROJECT-GUIDE.md             # Complete dev guide
    └── QUICKSTART.md                # Quick start reference
```

## 🎨 Design System Summary

### Colors
```
Primary Green:  #22c55e (main brand color)
Dark Green:     #15803d (headers, footer)
Light Green:    #f0fdf4 (backgrounds)
Accent Yellow:  #fbbf24 (badges, highlights)
```

### Typography
```
Display: Georgia, Cambria (for headlines)
Body:    System fonts (for readability)
```

### Component Hierarchy
```
Layout (Navbar + Footer)
  └── Page
      └── Sections
          └── Components (Cards, etc.)
```

### Animation Strategy
```
Page Load:  fadeIn (600ms)
Cards:      slideUp with staggered delays
Hero:       float (continuous 3s loop)
Hover:      scale + shadow transitions
```

## 📊 Page Flow

```
User Journey:

Landing (/) 
  ↓
  Hero: "Sleep Peacefully" → captures attention
  ↓
  Features: Build trust with key benefits
  ↓
  Products: Show solutions (3 featured)
  ↓
  Why Choose: Differentiate brand
  ↓
  Testimonials: Social proof
  ↓
  CTA: Drive to Products page
  
Products (/products)
  ↓
  Browse all 6 products
  ↓
  Filter by category
  ↓
  Learn benefits
  ↓
  View details / Contact

Safety (/safety)
  ↓
  Learn prevention
  ↓
  Get usage tips
  ↓
  Emergency info
  ↓
  Back to Products
```

## 🔄 Data Flow

```
lib/data.ts (Single Source of Truth)
    ↓
    ↓ import
    ↓
app/page.tsx ──→ Components ──→ Rendered UI
    ↓              (Props)
    ↓
User sees content
```

## 🎯 Component Usage Examples

### Using FeatureCard
```tsx
import FeatureCard from '@/components/FeatureCard'

<FeatureCard
  icon={<svg>...</svg>}
  title="Long-Lasting Protection"
  description="Continuous protection throughout the night"
  delay={100}
/>
```

### Using ProductCard
```tsx
import ProductCard from '@/components/ProductCard'

<ProductCard
  name="Liquid Vaporizer"
  description="All-night protection with advanced liquid technology"
  delay={0}
/>
```

### Using TestimonialCard
```tsx
import TestimonialCard from '@/components/TestimonialCard'

<TestimonialCard
  name="Priya Sharma"
  role="Mother of Two"
  content="Good Knight has been a lifesaver..."
  rating={5}
  delay={200}
/>
```

---

**This structure provides:**
✅ Clear separation of concerns
✅ Reusable components
✅ Centralized data management
✅ Scalable architecture
✅ Easy maintenance
