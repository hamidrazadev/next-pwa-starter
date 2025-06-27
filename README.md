# My Template - Next.js Starter

A modern, responsive Next.js starter template built with Tailwind CSS, designed for rapid development and easy customization.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Mobile-first** responsive design
- 🧩 **Reusable components** (Button, Card, Navbar, Footer)
- 🔧 **ESLint + Prettier** configured
- 🚀 **Production ready**
- 📦 **pnpm** package manager
- 🌐 **Google Fonts** (Inter) integration
- ♿ **Accessibility** focused

## Quick Start

### Using this template

\`\`\`bash
pnpm create next-app@latest my-project --template my-template
cd my-project
pnpm dev
\`\`\`

### Manual installation

\`\`\`bash
git clone <repository-url>
cd my-template
pnpm install
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view your application.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## Project Structure

\`\`\`
my-template/
├── app/
│   ├── layout.jsx          # Root layout
│   ├── page.jsx           # Home page
│   └── globals.css        # Global styles import
├── components/
│   ├── Navbar.jsx         # Navigation component
│   ├── Footer.jsx         # Footer component
│   ├── Button.jsx         # Reusable button
│   └── Card.jsx           # Reusable card
├── styles/
│   └── globals.css        # Global styles and Tailwind
├── public/
│   └── favicon.ico
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
└── package.json
\`\`\`

## Customization

### Colors and Theme

Edit the CSS custom properties in `styles/globals.css` to customize the color scheme:

\`\`\`css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other colors */
}
\`\`\`

### Components

All components are located in the `components/` directory and are fully customizable:

- **Button**: Supports multiple variants (primary, secondary, outline, ghost) and sizes
- **Card**: Flexible card component with optional title and description
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Multi-column footer with links and branding

### Adding New Pages

Create new pages in the `app/` directory:

\`\`\`jsx
// app/about/page.jsx
export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1>About Us</h1>
    </div>
  )
}
\`\`\`

## Deployment

### Vercel (Recommended)

\`\`\`bash
pnpm build
\`\`\`

Deploy to Vercel with zero configuration.

### Other Platforms

Build the application and serve the `out` directory:

\`\`\`bash
pnpm build
pnpm start
\`\`\`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find this template helpful, please consider giving it a star ⭐

For questions or support, please open an issue on GitHub.
\`\`\`

```text file=".gitignore"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/

# OS
Thumbs.db
