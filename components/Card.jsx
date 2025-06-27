export default function Card({ title, description, children, className = "", ...props }) {
  return (
    <div
      className={`bg-card text-card-foreground rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
      {...props}
    >
      {title && <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>}
      {description && <p className="text-muted-foreground text-sm mb-4">{description}</p>}
      {children}
    </div>
  )
}
