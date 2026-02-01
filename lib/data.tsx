export interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  benefits: string[]
  category: string
  image?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
}

export const products: Product[] = [
  {
    id: 'liquid-vaporizer',
    name: 'Liquid Vaporizer',
    description: 'All-night protection with advanced liquid technology. Lasts up to 45 nights.',
    longDescription: 'Our premium liquid vaporizer provides continuous protection throughout the night. The advanced formula ensures effective mosquito repellence while being completely safe for your family.',
    benefits: [
      'Lasts up to 45 nights',
      'Odorless and safe',
      'Easy to use',
      'Effective within minutes',
    ],
    category: 'vaporizer',
  },
  {
    id: 'fast-card',
    name: 'Fast Card',
    description: 'Instant action mosquito protection. Perfect for quick relief and outdoor use.',
    longDescription: 'Fast Card delivers rapid mosquito protection when you need it most. Ideal for both indoor and outdoor use, providing instant relief from mosquito bites.',
    benefits: [
      'Works in 5 minutes',
      'Portable and convenient',
      'Long-lasting effect',
      'Smoke-free formula',
    ],
    category: 'card',
  },
  {
    id: 'mosquito-spray',
    name: 'Mosquito Repellent Spray',
    description: 'Powerful spray for instant protection. Perfect for outdoor activities and travel.',
    longDescription: 'Our mosquito repellent spray offers powerful, instant protection wherever you go. The convenient spray format makes it perfect for outdoor adventures, camping, and travel.',
    benefits: [
      'Instant protection',
      'Water-resistant formula',
      'Pleasant fragrance',
      'Skin-friendly ingredients',
    ],
    category: 'spray',
  },
  {
    id: 'advanced-activ',
    name: 'Advanced Activ+',
    description: 'Next-generation protection with dual action technology for maximum effectiveness.',
    longDescription: 'Advanced Activ+ represents our latest innovation in mosquito protection. Featuring dual action technology that targets mosquitoes at multiple stages for superior protection.',
    benefits: [
      'Dual action formula',
      'Extended protection',
      'Low smoke emission',
      'Child-safe design',
    ],
    category: 'vaporizer',
  },
  {
    id: 'nature-care',
    name: 'Nature Care',
    description: 'Natural ingredients-based protection. Gentle care for your family with herbal extracts.',
    longDescription: 'Nature Care combines the power of natural herbal extracts with modern technology to provide gentle yet effective mosquito protection for the entire family.',
    benefits: [
      '100% natural ingredients',
      'Dermatologically tested',
      'Pleasant natural fragrance',
      'Eco-friendly',
    ],
    category: 'natural',
  },
  {
    id: 'power-activ',
    name: 'Power Activ',
    description: 'Maximum strength formula for heavy mosquito infestation areas.',
    longDescription: 'Power Activ is specially formulated for areas with heavy mosquito presence. Its powerful formula ensures complete protection even in challenging conditions.',
    benefits: [
      'Extra strong formula',
      'Covers large areas',
      'Fast-acting',
      'Long-lasting effect',
    ],
    category: 'vaporizer',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Mother of Two',
    content: 'Good Knight has been a lifesaver for our family. My kids sleep peacefully through the night without any mosquito bites. The liquid vaporizer is so easy to use and completely odorless!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    role: 'IT Professional',
    content: 'I travel frequently for work and always carry Good Knight spray with me. It provides instant protection and the fragrance is pleasant. Highly recommended for anyone who values quality sleep.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Anita Desai',
    role: 'Homemaker',
    content: 'We have been using Good Knight products for over 10 years now. The quality is consistent and it is very affordable. My entire family trusts this brand for mosquito protection.',
    rating: 5,
  },
]

export const features = [
  {
    id: '1',
    title: 'Long-Lasting Protection',
    description: 'Our advanced formulas provide continuous protection throughout the night, ensuring peaceful sleep for you and your family.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'Safe for Family',
    description: 'Dermatologically tested and certified safe. Our products are gentle on skin and suitable for use around children and pets.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'Easy to Use',
    description: 'Simple plug-and-play design makes our products incredibly convenient. Just plug in and enjoy mosquito-free nights.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: '4',
    title: 'Trusted Brand',
    description: 'With over 25 years of experience and millions of satisfied customers, Good Knight is India\'s most trusted mosquito protection brand.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

export const whyChooseUs = [
  {
    id: '1',
    title: 'Scientifically Tested',
    description: 'All our products undergo rigorous testing to ensure maximum effectiveness and safety.',
    icon: '🔬',
  },
  {
    id: '2',
    title: 'Kid-Safe Formulas',
    description: 'Specially formulated to be gentle and safe for children, giving parents peace of mind.',
    icon: '👶',
  },
  {
    id: '3',
    title: 'Affordable Protection',
    description: 'Premium quality at prices that don\'t break the bank. Protection for every family.',
    icon: '💰',
  },
  {
    id: '4',
    title: 'Eco-Friendly',
    description: 'We care about the environment. Our products are designed with sustainability in mind.',
    icon: '🌱',
  },
]

export const safetyTips = [
  {
    category: 'Preventing Mosquito Breeding',
    tips: [
      'Empty water from flower pots, coolers, and containers regularly',
      'Keep water storage containers covered at all times',
      'Clean and scrub water storage tanks weekly',
      'Dispose of old tires, bottles, and containers that can collect water',
      'Maintain swimming pools and ponds properly',
      'Ensure proper drainage in your surroundings',
    ],
  },
  {
    category: 'Night Protection Tips',
    tips: [
      'Use Good Knight liquid vaporizers before bedtime',
      'Keep windows and doors closed during dusk and dawn',
      'Install mosquito nets on windows and doors',
      'Sleep under mosquito nets in high-risk areas',
      'Wear light-colored, full-sleeve clothing',
      'Apply mosquito repellent on exposed skin',
    ],
  },
  {
    category: 'Indoor Safety Tips',
    tips: [
      'Place vaporizers at least 3 feet away from the bed',
      'Never use near food or in the kitchen area',
      'Keep products out of reach of children',
      'Ensure proper ventilation when using products',
      'Follow usage instructions carefully',
      'Store products in a cool, dry place',
      'Check expiry dates before use',
    ],
  },
  {
    category: 'Outdoor Protection',
    tips: [
      'Use mosquito repellent spray before outdoor activities',
      'Avoid areas with stagnant water',
      'Wear protective clothing during outdoor events',
      'Use citronella candles in outdoor seating areas',
      'Schedule outdoor activities during low mosquito activity times',
    ],
  },
]
