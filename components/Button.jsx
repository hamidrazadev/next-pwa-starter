"use client"

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
  type = "button",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed disabled:transform-none transform active:scale-95 select-none relative overflow-hidden"

  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 focus:ring-blue-400 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
    secondary: "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 focus:ring-gray-500 shadow-lg shadow-gray-900/50 hover:shadow-xl hover:shadow-gray-900/60 hover:-translate-y-0.5 border border-gray-700/50",
    outline: "border-2 border-blue-500/50 bg-black/50 backdrop-blur-sm text-blue-100 hover:border-blue-400 hover:bg-blue-950/30 hover:text-white focus:ring-blue-400 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 hover:-translate-y-0.5",
    ghost: "text-blue-100 hover:bg-blue-950/30 hover:text-white focus:ring-blue-400 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 backdrop-blur-sm",
    danger: "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 focus:ring-red-400 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-0.5",
    success: "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-500 hover:to-emerald-600 focus:ring-emerald-400 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5"
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