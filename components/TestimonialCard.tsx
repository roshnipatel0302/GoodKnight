interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  delay?: number
}

export default function TestimonialCard({ 
  name, 
  role, 
  content, 
  rating,
  delay = 0 
}: TestimonialCardProps) {
  return (
    <div 
      className="group relative card p-8 animate-slide-up hover:-translate-y-2 transition-all duration-300 border border-white/20 bg-white"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-primary-100 opacity-50">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Rating Stars */}
      <div className="flex items-center mb-6 gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-accent-500' : 'text-gray-300'
            } transition-colors`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm font-semibold text-gray-600">5.0</span>
      </div>

      {/* Testimonial Content */}
      <p className="text-gray-700 leading-relaxed mb-8 text-lg relative z-10">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <div className="relative">
          <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            {name.charAt(0)}
          </div>
          {/* Verified Badge */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center border-2 border-white">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
    </div>
  )
}
