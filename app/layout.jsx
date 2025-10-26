import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "PWA Ready Template - Next.js Starter",
  description: "A modern, responsive Next.js starter template with Tailwind CSS",
  keywords: ["Next.js", "React", "Tailwind CSS", "Template", "Modern", "Responsive"],
  authors: [{ name: "Muhammad Hamid Raza" }],
  creator: "Muhammad Hamid Raza",
  publisher: "Muhammad Hamid Raza",
  metadataBase: new URL("https://next-pwa-starter-hamidrazadev.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PWA Ready Template - Next.js Starter",
    description: "A modern, responsive Next.js starter template with Tailwind CSS",
    url: "https://next-pwa-starter-hamidrazadev.vercel.app/",
    siteName: "PWA Ready Template - Next.js Starter",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/app-related-assets/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "PWA Ready Template - Next.js Starter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PWA Ready Template - Next.js Starter",
    description: "A modern, responsive Next.js starter template with Tailwind CSS",
    creator: "@HamidRaza_Dev",
    images: ["/app-related-assets/icon-512x512.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/app-related-assets/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/app-related-assets/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/app-related-assets/favicon.svg" />
      </head>
      <body className={`min-h-screen flex flex-col font-sans bg-black text-white antialiased selection:bg-blue-500/20 selection:text-blue-200 overflow-x-hidden ${poppins.className}`}>
        {/* Background gradient overlay */}
        <div className="fixed inset-0 bg-linear-to-br from-blue-950/10 via-black to-blue-900/5 pointer-events-none z-[-1]"></div>

        {/* Animated background orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-600/3 rounded-full blur-2xl animate-pulse [animation-delay:2s]"></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-blue-400/4 rounded-full blur-xl animate-pulse [animation-delay:4s]"></div>
        </div>

        {/* Skip to main content for accessibility */}
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/25"
        >
          Skip to main content
        </Link>

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