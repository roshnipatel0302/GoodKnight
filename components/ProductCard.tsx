import Link from 'next/link'

interface ProductCardProps {
  name: string
  description: string
  image?: string
  href?: string
  delay?: number
}

export default function ProductCard({ 
  name, 
  description, 
  image, 
  href = '/products',
  delay = 0 
}: ProductCardProps) {
  return (
    <div 
      className="group card animate-slide-up hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Product Image */}
      <div className="relative h-72 bg-gradient-to-br from-primary-100 via-primary-50 to-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          {image ? (
            <div className="w-48 h-48 bg-white/50 rounded-full"></div>
          ) : (
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-3xl"></div>
              <svg 
                className="relative w-40 h-40 text-primary-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" 
                />
              </svg>
            </div>
          )}
        </div>

        {/* Badge with glassmorphism */}
        <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-md border border-accent-200 text-accent-600 rounded-full text-sm font-bold shadow-lg">
          ✨ Popular
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Product Info */}
      <div className="p-6 bg-white">
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {name}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Features List */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full">Fast Acting</span>
          <span className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full">Long Lasting</span>
        </div>

        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors group/link"
        >
          <span>Learn More</span>
          <svg 
            className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 border-2 border-primary-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  )
}
