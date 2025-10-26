"use client"
import { useState, useEffect } from "react"
import { Home, ArrowLeft, Search, MapPin, Compass, Zap, Rocket, Star, AlertTriangle, RefreshCw } from "lucide-react"
import Link from "next/link"

function Button({ children, variant = "primary", size = "md", className = "", disabled = false, onClick, type = "button", ...props }) {
    const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed disabled:transform-none transform active:scale-95 select-none relative overflow-hidden"

    const variants = {
        primary: "bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 focus:ring-blue-400 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-linear-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        secondary: "bg-linear-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 focus:ring-gray-500 shadow-lg shadow-gray-900/50 hover:shadow-xl hover:shadow-gray-900/60 hover:-translate-y-0.5 border border-gray-700/50",
        outline: "border-2 border-blue-500/50 bg-black/50 backdrop-blur-sm text-blue-100 hover:border-blue-400 hover:bg-blue-950/30 hover:text-white focus:ring-blue-400 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 hover:-translate-y-0.5",
        ghost: "text-blue-100 hover:bg-blue-950/30 hover:text-white focus:ring-blue-400 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 backdrop-blur-sm",
        danger: "bg-linear-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 focus:ring-red-400 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-0.5",
        success: "bg-linear-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-500 hover:to-emerald-600 focus:ring-emerald-400 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5"
    }

    const sizes = {
        sm: "px-4 py-2 text-sm min-h-[2.25rem]",
        md: "px-6 py-2.5 text-sm min-h-[2.75rem]",
        lg: "px-8 py-3 text-base min-h-[3.25rem]",
        xl: "px-10 py-4 text-lg min-h-[3.75rem]",
        icon: "p-2.5 min-h-[2.75rem] min-w-[2.75rem]"
    }

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

    return (
        <button type={type} className={classes} disabled={disabled} onClick={onClick} {...props}>
            {children}
        </button>
    )
}

export default function NotFoundPage() {
    const [glitchEffect, setGlitchEffect] = useState(false)
    // const [searchQuery, setSearchQuery] = useState("")
    const [currentMessage, setCurrentMessage] = useState(0)
    // const [isSearching, setIsSearching] = useState(false)

    const messages = [
        "Oops! This page took a wrong turn.",
        "404: Page not found in this dimension.",
        "The page you're looking for is on vacation.",
        "Houston, we have a problem... page missing!",
        "This page got lost in cyberspace.",
    ]

    const popularPages = [
        { name: "Home", path: "/", icon: Home },
        { name: "About", path: "/about", icon: Star },
        { name: "Services", path: "/services", icon: Zap },
        { name: "Contact", path: "/contact", icon: MapPin },
        { name: "Blog", path: "/blog", icon: Compass },
    ]

    const quickActions = [
        {
            name: "Go Back",
            action: () => window.history.back(),
            icon: ArrowLeft,
            variant: "outline"
        },
        {
            name: "Home Page",
            action: () => window.location.href = "/",
            icon: Home,
            variant: "primary"
        },
        {
            name: "Refresh",
            action: () => window.location.reload(),
            icon: RefreshCw,
            variant: "ghost"
        },
    ]

    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setGlitchEffect(true)
            setTimeout(() => setGlitchEffect(false), 200)
        }, 3000)

        const messageInterval = setInterval(() => {
            setCurrentMessage(prev => (prev + 1) % messages.length)
        }, 4000)

        return () => {
            clearInterval(glitchInterval)
            clearInterval(messageInterval)
        }
    }, [])

    // const handleSearch = async (e) => {
    //     e.preventDefault()
    //     if (!searchQuery.trim()) return

    //     setIsSearching(true)
    //     // Simulate search
    //     await new Promise(resolve => setTimeout(resolve, 1500))
    //     setIsSearching(false)

    //     // In a real app, you would perform actual search
    //     console.log("Searching for:", searchQuery)
    // }

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-black to-purple-950/20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Broken Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0)] bg-[length:50px_50px] opacity-30"></div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${4 + Math.random() * 2}s`
                        }}
                    >
                        <div className="w-2 h-2 bg-blue-500/20 rounded-full"></div>
                    </div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
                {/* Glitch 404 */}
                <div className="mb-8 relative">
                    <div className={`text-8xl md:text-9xl font-black mb-4 transition-all duration-200 ${glitchEffect
                            ? 'text-red-500 transform skew-x-2 animate-pulse'
                            : 'bg-linear-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent'
                        }`}>
                        404
                    </div>

                    {/* Glitch overlay */}
                    {glitchEffect && (
                        <div className="absolute inset-0 text-8xl md:text-9xl font-black text-blue-500 opacity-50 transform -skew-x-2 translate-x-1">
                            404
                        </div>
                    )}

                    {/* Animated underline */}
                    <div className="mx-auto w-32 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                </div>

                {/* Dynamic Message */}
                <div className="mb-8 h-16 flex items-center justify-center">
                    <p className="text-2xl md:text-3xl font-light text-gray-300 transition-all duration-500 transform">
                        {messages[currentMessage]}
                    </p>
                </div>

                {/* Search Bar */}
                {/* <div className="mb-12 max-w-md mx-auto">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                            className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border-2 border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-gray-900/70 transition-all duration-300 backdrop-blur-sm"
                            placeholder="Search for what you're looking for..."
                        />
                        <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                            <Button
                                onClick={handleSearch}
                                disabled={isSearching || !searchQuery.trim()}
                                variant="primary"
                                size="sm"
                            >
                                {isSearching ? (
                                    <RefreshCw className="w-4 h-4 animate-spin" />
                                ) : (
                                    "Search"
                                )}
                            </Button>
                        </div>
                    </div>
                </div> */}

                {/* Quick Actions */}
                <div className="mb-12">
                    <h3 className="text-lg font-semibold text-gray-300 mb-6">Quick Actions</h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {quickActions.map((action, index) => (
                            <Button
                                key={index}
                                onClick={action.action}
                                variant={action.variant}
                                size="lg"
                                className="min-w-[140px]"
                            >
                                <action.icon className="w-5 h-5 mr-2" />
                                {action.name}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Popular Pages */}
                <div className="mb-12">
                    <h3 className="text-lg font-semibold text-gray-300 mb-6">Popular Pages</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {popularPages.map((page, index) => (
                            <Link
                                key={index}
                                href={page.path}
                                className="group bg-linear-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
                            >
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                                        <page.icon className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <span className="ml-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                                        {page.name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Astronaut Illustration */}
                <div className="mb-8">
                    <div className="relative inline-block">
                        <div className="w-24 h-24 bg-linear-to-br from-blue-500/20 to-purple-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30 shadow-2xl shadow-blue-500/20 animate-bounce">
                            <Rocket className="w-12 h-12 text-blue-400 transform rotate-45" />
                        </div>
                        {/* Floating stars */}
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-ping"
                                style={{
                                    left: `${20 + i * 30}%`,
                                    top: `${10 + i * 20}%`,
                                    animationDelay: `${i * 0.5}s`
                                }}
                            >
                                <Star className="w-3 h-3 text-yellow-400" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Message */}
                <div className="bg-linear-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-2xl mx-auto">
                    <div className="flex items-center justify-center mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-400 mr-2" />
                        <span className="text-gray-300 font-medium">Lost in Space?</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Don't worry! Even the best explorers sometimes take wrong turns.
                        Use the navigation above to find your way back to familiar territory,
                        or contact our support team if you need assistance.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                        <p className="text-xs text-gray-500">
                            Error Code: 404 • Page Not Found • {new Date().toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
        </div>
    )
}