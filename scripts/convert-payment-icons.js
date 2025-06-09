const sharp = require('sharp');

async function convertPaymentIcons() {
  try {
    await sharp('public/payment/payment-icons.svg')
      .webp({
        quality: 90,
        lossless: true
      })
      .toFile('public/payment/payment-icons.webp');
    
    console.log('Successfully converted payment icons to WebP format!');
  } catch (error) {
    console.error('Error converting payment icons:', error);
  }
}

convertPaymentIcons(); 