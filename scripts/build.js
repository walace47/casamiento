const fs = require('fs-extra');
const path = require('path');
const crypto = require('crypto');

// Directorios
const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');
const versionFile = path.join(__dirname, '../.version');

// Generar versión basada en timestamp y hash
function generateVersion() {
  const timestamp = Date.now();
  const hash = crypto.createHash('md5').update(timestamp.toString()).digest('hex').substring(0, 8);
  return `${timestamp}-${hash}`;
}

// Obtener hash de un archivo
function getFileHash(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(content).digest('hex').substring(0, 8);
}

// Reemplazar referencias a archivos con versiones
function replaceAssetReferences(content, assetMap) {
  let newContent = content;

  // Reemplazar referencias en HTML/CSS/JS
  Object.entries(assetMap).forEach(([original, versioned]) => {
    const regex = new RegExp(original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    newContent = newContent.replace(regex, versioned);
  });

  return newContent;
}

// Procesar archivos y agregar versiones
async function build() {
  try {
    console.log('🚀 Iniciando build con versionado...');

    // Limpiar directorio dist
    if (fs.existsSync(distDir)) {
      fs.removeSync(distDir);
    }
    fs.ensureDirSync(distDir);

    // Generar versión
    const version = generateVersion();
    fs.writeFileSync(versionFile, version);
    console.log(`📦 Versión generada: ${version}`);

    // Mapa de archivos originales a versionados
    const assetMap = {};

    // Copiar y versionar archivos CSS
    const cssFiles = fs.readdirSync(path.join(srcDir, 'css'));
    cssFiles.forEach(file => {
      if (file.endsWith('.css')) {
        const originalPath = path.join(srcDir, 'css', file);
        const hash = getFileHash(originalPath);
        const versionedName = file.replace('.css', `.${hash}.css`);
        const versionedPath = path.join(distDir, 'css', versionedName);

        fs.ensureDirSync(path.dirname(versionedPath));
        fs.copyFileSync(originalPath, versionedPath);

        assetMap[`css/${file}`] = `css/${versionedName}`;
        assetMap[`./css/${file}`] = `./css/${versionedName}`;
        console.log(`✅ CSS versionado: ${file} -> ${versionedName}`);
      }
    });

    // Copiar y versionar archivos JS
    const jsFiles = fs.readdirSync(path.join(srcDir, 'js'));
    jsFiles.forEach(file => {
      if (file.endsWith('.js')) {
        const originalPath = path.join(srcDir, 'js', file);
        const hash = getFileHash(originalPath);
        const versionedName = file.replace('.js', `.${hash}.js`);
        const versionedPath = path.join(distDir, 'js', versionedName);

        fs.ensureDirSync(path.dirname(versionedPath));
        fs.copyFileSync(originalPath, versionedPath);

        assetMap[`js/${file}`] = `js/${versionedName}`;
        assetMap[`./js/${file}`] = `./js/${versionedName}`;
        console.log(`✅ JS versionado: ${file} -> ${versionedName}`);
      }
    });

    // Copiar assets (imágenes) - opcionalmente versionar
    const assetsDir = path.join(srcDir, 'assets');
    const distAssetsDir = path.join(distDir, 'assets');
    if (fs.existsSync(assetsDir)) {
      fs.copySync(assetsDir, distAssetsDir);
      console.log('✅ Assets copiados');
    }

    // Procesar HTML
    const htmlFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));
    htmlFiles.forEach(file => {
      const originalPath = path.join(srcDir, file);
      let content = fs.readFileSync(originalPath, 'utf8');

      // Reemplazar referencias a archivos versionados
      content = replaceAssetReferences(content, assetMap);

      // Agregar meta tag para versión
      if (content.includes('</head>')) {
        content = content.replace(
          '</head>',
          `    <meta name="version" content="${version}" />\n  </head>`
        );
      }

      const distPath = path.join(distDir, file);
      fs.writeFileSync(distPath, content, 'utf8');
      console.log(`✅ HTML procesado: ${file}`);
    });

    console.log('\n✨ Build completado exitosamente!');
    console.log(`📁 Archivos en: ${distDir}`);
    console.log(`🔢 Versión: ${version}\n`);

  } catch (error) {
    console.error('❌ Error en el build:', error);
    process.exit(1);
  }
}

build();

