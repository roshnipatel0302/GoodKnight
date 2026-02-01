import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/data'

export const metadata = {
  title: 'Our Products - Good Knight',
  description: 'Explore our complete range of mosquito protection products. Safe, effective, and trusted by millions.',
}

export default function ProductsPage() {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'vaporizer', name: 'Vaporizers' },
    { id: 'spray', name: 'Sprays' },
    { id: 'natural', name: 'Natural' },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
              Our Products
            </h1>
            <p className="text-xl text-primary-50 animate-slide-up">
              Discover our complete range of mosquito protection solutions, 
              each designed with your family's safety and comfort in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter (Optional - for future enhancement) */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  category.id === 'all'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                delay={index * 50}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 mb-12">
              Every Good Knight Product Offers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Effectiveness</h3>
                  <p className="text-gray-600">Scientifically tested formulas that deliver results you can trust.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Safety</h3>
                  <p className="text-gray-600">Gentle formulations safe for use around children and pets.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Long-Lasting Protection</h3>
                  <p className="text-gray-600">Extended coverage that keeps mosquitoes away all night long.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to Use</h3>
                  <p className="text-gray-600">Simple, hassle-free application for immediate protection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-5 right-10 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-5 left-10 w-48 h-48 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Need Help Choosing?
              </h2>
              <p className="text-lg mb-8 text-primary-50">
                Our team is here to help you find the perfect mosquito protection solution for your needs.
              </p>
              <a 
                href="#" 
                className="inline-block px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
