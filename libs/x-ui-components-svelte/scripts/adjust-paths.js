const fs = require('fs');
const path = require('path');

const typesDir = path.join(__dirname, '../dist/types');
const files = fs.readdirSync(typesDir);

files.forEach(file => {
  if (file.endsWith('.d.ts')) {
    const filePath = path.join(typesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Adjust paths based on your project structure
    content = content.replace(/\.\/menu\//g, './');
    content = content.replace(/\.\/accordion\//g, './');
    content = content.replace(/\.\/modal\//g, './');
    content = content.replace(/\.\/select\//g, './');
    content = content.replace(/\.\/multiselect\//g, './');

    fs.writeFileSync(filePath, content, 'utf-8');
  }
});
