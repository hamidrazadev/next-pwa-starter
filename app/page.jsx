import Button from "@/components/Button"
import Card from "@/components/Card"

export default function HomePage() {
  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16 sm:mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Welcome to <span className="text-primary">My Template</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A modern, responsive Next.js starter template built with Tailwind CSS. Clean, simple, and ready to customize
          for your next project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <Card
            title="Next.js App Router"
            description="Built with the latest Next.js App Router for optimal performance and developer experience."
          />
          <Card
            title="Tailwind CSS"
            description="Utility-first CSS framework for rapid UI development with mobile-first responsive design."
          />
          <Card
            title="Modern JavaScript"
            description="Clean, modern JavaScript with ESLint and Prettier configured for consistent code quality."
          />
          <Card
            title="Responsive Design"
            description="Mobile-first approach ensuring your app looks great on all devices and screen sizes."
          />
          <Card
            title="Developer Ready"
            description="Pre-configured with essential development tools and scripts for immediate productivity."
          />
          <Card
            title="Production Ready"
            description="Optimized for deployment on Vercel and other modern hosting platforms."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-secondary rounded-lg p-8 sm:p-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to build something amazing?</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Start customizing this template to create your next great project.
        </p>
        <Button variant="primary">Start Building</Button>
      </section>
    </div>
  )
}
