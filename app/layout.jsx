import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "PWA Ready Template - Next.js Starter",
  description: "A modern, responsive Next.js starter template with Tailwind CSS",
  keywords: ["Next.js", "React", "Tailwind CSS", "Template", "Modern", "Responsive"],
  authors: [{ name: "Muhammad Hamid Raza" }],
  creator: "Muhammad Hamid Raza",
  publisher: "Muhammad Hamid Raza",
  metadataBase: new URL("https://nextjs-starter-template-with-pwa.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PWA Ready Template - Next.js Starter",
    description: "A modern, responsive Next.js starter template with Tailwind CSS",
    url: "https://nextjs-starter-template-with-pwa.vercel.app/",
    siteName: "PWA Ready Template",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PWA Ready Template - Next.js Starter",
    description: "A modern, responsive Next.js starter template with Tailwind CSS",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e40af" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Modern font stack with Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-black text-white antialiased selection:bg-blue-500/20 selection:text-blue-200 overflow-x-hidden">
        {/* Background gradient overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-950/10 via-black to-blue-900/5 pointer-events-none z-[-1]"></div>

        {/* Animated background orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-600/3 rounded-full blur-2xl animate-pulse [animation-delay:2s]"></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-blue-400/4 rounded-full blur-xl animate-pulse [animation-delay:4s]"></div>
        </div>

        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/25"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main id="main-content" className="flex-1 relative z-10">
          <div className="relative">
            {children}
          </div>
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  )
}