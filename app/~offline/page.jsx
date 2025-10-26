"use client"
import { useState, useEffect } from "react"
import { Wifi, WifiOff, RefreshCw, Globe, Smartphone, Router, AlertCircle, Clock } from "lucide-react"

// -----------------------------
// Button Component
// -----------------------------
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

// -----------------------------
// Constants
// -----------------------------
const TROUBLESHOOTING_TIPS = [
    { id: 1, icon: Router, title: "Check Your Router", description: "Make sure your router is powered on and all cables are connected properly." },
    { id: 2, icon: Wifi, title: "WiFi Connection", description: "Try disconnecting and reconnecting to your WiFi network." },
    { id: 3, icon: Smartphone, title: "Mobile Data", description: "If using WiFi, try switching to mobile data or vice versa." },
    { id: 4, icon: Globe, title: "Website Status", description: "The website might be temporarily down. Try again in a few minutes." }
]

const QUICK_ACTIONS = [
    { id: 1, label: "Refresh Page", variant: "primary", action: () => window.location.reload() },
    { id: 2, label: "Go Back", variant: "outline", action: () => window.history.back() },
    { id: 3, label: "Home Page", variant: "ghost", action: () => window.location.href = "/" }
]

// -----------------------------
// Offline Page Component
// -----------------------------
export default function OfflinePage() {
    const [isRetrying, setIsRetrying] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date())
    const [lastChecked, setLastChecked] = useState(new Date())
    const [connectionAttempts, setConnectionAttempts] = useState(0)
    const [showTips, setShowTips] = useState(false)

    // Update clock every second
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    // Retry connection
    const handleRetry = async () => {
        setIsRetrying(true)
        setConnectionAttempts(prev => prev + 1)
        setLastChecked(new Date())
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsRetrying(false)
    }

    return (
        <div className="min-h-screen pt-24 pb-12 bg-black text-white relative overflow-hidden flex items-center justify-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-black to-blue-950/30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.1)_1px,transparent_0)] bg-size-[50px_50px] opacity-30"></div>

            {/* Floating WifiOff Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-bounce"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                        }}
                    >
                        <WifiOff className="w-4 h-4 text-red-500/20" />
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
                {/* Offline Icon */}
                <div className="mb-8">
                    <div className="relative inline-flex items-center justify-center">
                        <div className="w-32 h-32 bg-linear-to-br from-red-500/20 to-red-600/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-red-500/30 shadow-2xl shadow-red-500/20">
                            <WifiOff className="w-16 h-16 text-red-400 animate-pulse" />
                        </div>
                        <div className="absolute inset-0 rounded-full border-4 border-red-500/20 animate-ping"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-red-500/10 animate-ping" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>

                {/* Message */}
                <div className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
                        You're Offline
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                        It looks like you've lost your internet connection. Don't worry, we'll help you get back online.
                    </p>

                    {/* Connection Status */}
                    <div className="bg-linear-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 mb-8 max-w-md mx-auto">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400">Connection Status</span>
                            <div className="flex items-center text-red-400">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                                Disconnected
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400">Last Checked</span>
                            <span className="text-white text-sm">{lastChecked.toLocaleTimeString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400">Attempts</span>
                            <span className="text-blue-400">{connectionAttempts}</span>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-12 flex flex-wrap gap-4 justify-center">
                    <Button onClick={handleRetry} disabled={isRetrying} size="lg" className="min-w-[150px]">
                        {isRetrying ? (
                            <>
                                <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                                Checking...
                            </>
                        ) : (
                            <>
                                <RefreshCw className="w-5 h-5 mr-2" />
                                Try Again
                            </>
                        )}
                    </Button>
                    {QUICK_ACTIONS.map(action => (
                        <Button key={action.id} onClick={action.action} variant={action.variant} size="lg">
                            {action.label}
                        </Button>
                    ))}
                </div>

                {/* Troubleshooting Tips */}
                <div className="mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <Button onClick={() => setShowTips(!showTips)} variant="ghost" className="text-blue-400">
                            <AlertCircle className="w-5 h-5 mr-2" />
                            {showTips ? 'Hide' : 'Show'} Troubleshooting Tips
                        </Button>
                    </div>

                    {showTips && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-in slide-in-from-top duration-300">
                            {TROUBLESHOOTING_TIPS.map(tip => (
                                <div
                                    key={tip.id}
                                    className="bg-linear-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                                >
                                    <div className="flex items-start">
                                        <div className="shrink-0 w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                                            <tip.icon className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div className="ml-4 text-left">
                                            <h3 className="text-lg font-semibold text-white mb-2">{tip.title}</h3>
                                            <p className="text-gray-400 text-sm">{tip.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Live Clock */}
                <div className="bg-linear-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-md mx-auto">
                    <div className="flex items-center justify-center mb-2">
                        <Clock className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-gray-400">Current Time</span>
                    </div>
                    <div className="text-2xl font-mono text-white">{currentTime.toLocaleTimeString()}</div>
                    <div className="text-sm text-gray-400 mt-1">{currentTime.toLocaleDateString()}</div>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm">
                        This page works offline. Once your connection is restored, you can continue browsing normally.
                    </p>
                </div>
            </div>
        </div>
    )
}
