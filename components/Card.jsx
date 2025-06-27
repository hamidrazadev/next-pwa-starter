export default function Card({
  title,
  description,
  children,
  className = "",
  variant = "default",
  interactive = false,
  ...props
}) {
  const baseClasses = "rounded-xl border transition-all duration-300 ease-out relative overflow-hidden group"

  const variants = {
    default: "bg-gradient-to-br from-gray-900 to-black border-gray-800/50 text-white shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-blue-500/10 hover:border-gray-700/70",
    elevated: "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 text-white shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-gray-600/70 hover:-translate-y-1",
    glass: "bg-black/30 backdrop-blur-xl border-gray-700/30 text-white shadow-lg shadow-black/20 hover:bg-black/40 hover:border-blue-500/30 hover:shadow-blue-500/10",
    outline: "bg-transparent border-2 border-blue-500/30 text-blue-100 shadow-lg shadow-blue-500/10 hover:border-blue-400/50 hover:bg-blue-950/20 hover:shadow-blue-500/20",
    solid: "bg-blue-950/50 border-blue-800/50 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-900/60 hover:border-blue-700/70 hover:shadow-blue-500/30"
  }

  const paddingClasses = "p-6"
  const interactiveClasses = interactive ? "cursor-pointer hover:scale-[1.02] active:scale-[0.98]" : ""

  const cardClasses = `${baseClasses} ${variants[variant]} ${paddingClasses} ${interactiveClasses} ${className}`

  return (
    <div className={cardClasses} {...props}>
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />

      {/* Content */}
      <div className="relative z-10">
        {title && (
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300 leading-tight">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-gray-300 text-sm mb-4 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        )}
        <div className="space-y-4">
          {children}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}