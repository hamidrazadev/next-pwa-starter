import Link from "next/link";

const HERO_BUTTONS = [
  {
    label: "Get Started",
    href: "https://hamidrazadev.vercel.app/blogs/meet-the-nextpwa-starter-your-shortcut-to-building-modern-web-apps-4fo7-2962238",
    primary: true,
  },
  {
    label: "Learn More",
    href: "/contact",
    primary: false,
  },
];

const FEATURES = [
  {
    title: "Next.js App Router",
    description:
      "Built with the latest Next.js App Router for optimal performance and developer experience.",
    icon: "⚡",
  },
  {
    title: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapid UI development with mobile-first responsive design.",
    icon: "🎨",
  },
  {
    title: "Modern JavaScript",
    description:
      "Clean, modern JavaScript with ESLint and Prettier configured for consistent code quality.",
    icon: "💻",
  },
  {
    title: "Responsive Design",
    description:
      "Mobile-first approach ensuring your app looks great on all devices and screen sizes.",
    icon: "📱",
  },
  {
    title: "Developer Ready",
    description:
      "Pre-configured with essential development tools and scripts for immediate productivity.",
    icon: "🚀",
  },
  {
    title: "PWA Ready",
    description:
      "Ready to be installed as a Progressive Web App (PWA) for seamless offline usage.",
    icon: "🏭",
  },
];

const buttonBase =
  "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out " +
  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-40 cursor-pointer " +
  "disabled:cursor-not-allowed transform active:scale-95 select-none relative overflow-hidden px-8 py-3 text-base min-h-13";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-linear-to-br from-blue-950/20 via-black to-blue-900/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Welcome to </span>
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
              PWA Ready Template
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            A modern, responsive Next.js starter template built with Tailwind CSS. Clean, simple, and ready to
            customize for your next{" "}
            <span className="text-blue-300 font-semibold">amazing project</span>.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {HERO_BUTTONS.map((btn) => (
              <Link
                key={btn.label}
                href={btn.href}
                target={btn.primary ? "_blank" : undefined}
                className={
                  buttonBase +
                  (btn.primary
                    ? " bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 focus:ring-blue-400 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
                    : " bg-linear-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 focus:ring-gray-500 border border-gray-700/50 shadow-lg shadow-gray-900/50")
                }
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-linear-to-b from-black via-blue-950/5 to-black"></div>
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
            {FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-linear-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-blue-100/70 leading-relaxed group-hover:text-blue-100/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
