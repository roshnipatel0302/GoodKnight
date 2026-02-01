import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-200/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-primary-200 text-primary-700 rounded-full text-sm font-semibold shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              Trusted Protection Since 1995
            </div>
            
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-[1.1] mb-6">
                Sleep Peacefully.
                <span className="block mt-3 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-clip-text text-transparent animate-gradient">
                  Stay Protected.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Experience uninterrupted sleep with Good Knight's advanced mosquito protection. 
                <span className="block mt-2 text-primary-700 font-semibold">Safe for your family, tough on mosquitoes.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="group relative px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-center">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Products
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
              <Link href="/safety" className="px-8 py-4 bg-white border-2 border-primary-600 text-primary-700 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg text-center">
                Safety Tips
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-gray-200">
              <div className="text-center sm:text-left">
                <div className="text-4xl font-display font-bold bg-gradient-to-br from-primary-600 to-primary-700 bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Protection</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-display font-bold bg-gradient-to-br from-primary-600 to-primary-700 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Safe Formula</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-display font-bold bg-gradient-to-br from-primary-600 to-primary-700 bg-clip-text text-transparent mb-2">25M+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Families</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Product Showcase */}
          <div className="relative animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              {/* Main Product Display */}
              <div className="relative w-full h-[600px] flex items-center justify-center">
                {/* Animated Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[450px] h-[450px] border-2 border-primary-200 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                  <div className="w-[350px] h-[350px] border-2 border-primary-300/50 rounded-full animate-pulse"></div>
                </div>
                
                {/* Product Container */}
                <div className="relative z-10 w-72 h-96 bg-gradient-to-br from-white via-white to-primary-50 rounded-[2.5rem] shadow-2xl flex items-center justify-center transform hover:scale-105 transition-all duration-500 border border-primary-100">
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-white font-bold text-sm">NEW</span>
                  </div>
                  <svg 
                    className="w-40 h-40 text-primary-500 drop-shadow-lg" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                    />
                  </svg>
                </div>

                {/* Floating Feature Badges */}
                <div className="absolute top-20 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🌙</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">All Night</div>
                      <div className="text-sm font-bold text-gray-900">Protection</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-32 -right-8 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">100%</div>
                      <div className="text-sm font-bold text-gray-900">Safe</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-12 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Proven</div>
                      <div className="text-sm font-bold text-gray-900">Formula</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
