import { safetyTips } from '@/lib/data.tsx'

export const metadata = {
  title: 'Safety Tips - Good Knight',
  description: 'Learn how to prevent mosquito breeding and protect your family with our expert safety tips.',
}

export default function SafetyPage() {
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
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                🛡️ Protection Guide
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
              Safety Tips
            </h1>
            <p className="text-xl text-primary-50 animate-slide-up">
              Expert advice on preventing mosquito breeding and ensuring your family's safety
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 border-l-4 border-primary-600 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Why Mosquito Prevention Matters
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mosquitoes are more than just a nuisance—they can transmit serious diseases like dengue, 
                malaria, and chikungunya. Taking preventive measures is crucial for protecting your family's health.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By following these simple yet effective tips, you can significantly reduce mosquito breeding 
                and create a safer environment for your loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips Categories */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto space-y-16">
            {safetyTips.map((section, sectionIndex) => (
              <div 
                key={sectionIndex} 
                className="animate-slide-up"
                style={{ animationDelay: `${sectionIndex * 100}ms` }}
              >
                {/* Section Header */}
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mr-4">
                    {sectionIndex + 1}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                    {section.category}
                  </h2>
                </div>

                {/* Tips Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.tips.map((tip, tipIndex) => (
                    <div 
                      key={tipIndex}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                          <svg 
                            className="w-5 h-5 text-primary-600" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M5 13l4 4L19 7" 
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700 leading-relaxed flex-1">
                          {tip}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 mb-12">
              Additional Protection Measures
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                  Use Repellents
                </h3>
                <p className="text-gray-600">
                  Apply Good Knight mosquito repellents regularly for continuous protection against bites.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                  Keep Clean
                </h3>
                <p className="text-gray-600">
                  Maintain cleanliness in and around your home to prevent mosquito breeding grounds.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                  Stay Alert
                </h3>
                <p className="text-gray-600">
                  Be vigilant during dawn and dusk when mosquitoes are most active and take extra precautions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                  Experiencing Mosquito-Borne Illness Symptoms?
                </h3>
                <p className="text-gray-600 mb-4">
                  If you or a family member shows symptoms of dengue, malaria, or chikungunya 
                  (high fever, severe headache, joint pain, rash), seek medical attention immediately.
                </p>
                <p className="text-primary-600 font-semibold">
                  For medical emergencies, call: 108 (Ambulance)
                </p>
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
                Protect Your Family Today
              </h2>
              <p className="text-lg mb-8 text-primary-50">
                Explore our range of effective mosquito protection products and enjoy peaceful, bite-free nights.
              </p>
              <a 
                href="/products" 
                className="inline-block px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
