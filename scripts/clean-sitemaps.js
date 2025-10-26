const path = require('path');
const fs = require('fs');

// __dirname already exists in CJS 👍
const publicDir = path.join(__dirname, '..', 'public');

const filesToDelete = [
    'sitemap.xml',
    'sitemap-0.xml',
    // 'sitemap-1.xml',
    // 'sitemap-index.xml',
    'robots.txt'
];

filesToDelete.forEach((file) => {
    const filePath = path.join(publicDir, file);

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`🗑️  Deleted: ${file}`);
    } else {
        console.log(`⚠️  File not found: ${file}`);
    }
});

console.log('✅ Sitemap cleanup completed.');