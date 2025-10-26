module.exports = {
    // ✅ Your production site URL (no trailing slash recommended)
    siteUrl: 'https://next-pwa-starter-hamidrazadev.vercel.app',

    // ✅ Generate robots.txt automatically
    generateRobotsTxt: true,

    // ✅ Split sitemap if too large (good for scalability)
    sitemapSize: 5000,

    // 🚫 Pages you don’t want search engines sniffing around
    exclude: [
        '/~offline',
        '/400',
        '/500'
    ],

    // 🔧 Robots.txt rules
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/400', '/500', '/~offline'] // Bonus protection
            },
            {
                userAgent: 'BadBot',
                disallow: '/'
            }
        ]
    },
}
