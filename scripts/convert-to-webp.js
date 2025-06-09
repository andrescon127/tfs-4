const sharp = require('sharp');

async function convertToWebP() {
  try {
    await sharp('public/talent-funnel-system.png')
      .webp({
        quality: 90,
        lossless: false
      })
      .toFile('public/talent-funnel-system.webp');
    
    console.log('Successfully converted image to WebP format!');
  } catch (error) {
    console.error('Error converting image:', error);
  }
}

convertToWebP(); 