interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <div 
      className="group card p-8 hover:-translate-y-2 transition-all duration-300 border border-primary-100 relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Decorative Corner Element */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary-100 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
  )
}
