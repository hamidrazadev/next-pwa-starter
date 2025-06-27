"use client"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-blue-900/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Welcome to </span>
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
                My Template
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              A modern, responsive Next.js starter template built with Tailwind CSS. Clean, simple, and ready to customize
              for your next <span className="text-blue-300 font-semibold">amazing project</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed disabled:transform-none transform active:scale-95 select-none relative overflow-hidden px-8 py-3 text-base min-h-[3.25rem] bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 focus:ring-blue-400 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 group">
                <span className="mr-2">Get Started</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed disabled:transform-none transform active:scale-95 select-none relative overflow-hidden px-8 py-3 text-base min-h-[3.25rem] bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 focus:ring-gray-500 shadow-lg shadow-gray-900/50 hover:shadow-xl hover:shadow-gray-900/60 hover:-translate-y-0.5 border border-gray-700/50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful <span className="text-blue-400">Features</span>
            </h2>
            <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
              Everything you need to build modern web applications with confidence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Next.js App Router",
                description: "Built with the latest Next.js App Router for optimal performance and developer experience.",
                icon: "⚡"
              },
              {
                title: "Tailwind CSS",
                description: "Utility-first CSS framework for rapid UI development with mobile-first responsive design.",
                icon: "🎨"
              },
              {
                title: "Modern JavaScript",
                description: "Clean, modern JavaScript with ESLint and Prettier configured for consistent code quality.",
                icon: "💻"
              },
              {
                title: "Responsive Design",
                description: "Mobile-first approach ensuring your app looks great on all devices and screen sizes.",
                icon: "📱"
              },
              {
                title: "Developer Ready",
                description: "Pre-configured with essential development tools and scripts for immediate productivity.",
                icon: "🚀"
              },
              {
                title: "Production Ready",
                description: "Optimized for deployment on Vercel and other modern hosting platforms.",
                icon: "🏭"
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100/70 leading-relaxed group-hover:text-blue-100/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-blue-900/10 to-blue-950/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-blue-500/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5"></div>
            <div className="absolute top-0 left-1/3 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to build something <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">amazing</span>?
              </h2>
              <p className="text-blue-100/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Start customizing this template to create your next great project. The possibilities are endless.
              </p>
              <button className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed disabled:transform-none transform active:scale-95 select-none relative overflow-hidden px-10 py-4 text-lg min-h-[3.75rem] bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 focus:ring-blue-400 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 group">
                <span className="mr-3">Start Building</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}