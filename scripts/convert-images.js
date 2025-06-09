const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertImages() {
  // Convert talent-funnel-system.svg to JPG
  await sharp('public/talent-funnel-system.svg')
    .jpeg({
      quality: 90,
      chromaSubsampling: '4:4:4'
    })
    .toFile('public/talent-funnel-system.jpg');

  // Convert andrew-photo.svg to JPG
  await sharp('public/andrew-photo.svg')
    .jpeg({
      quality: 90,
      chromaSubsampling: '4:4:4'
    })
    .toFile('public/andrew-photo.jpg');

  // Convert payment-methods.svg to PNG with transparency
  await sharp('public/payment/payment-methods.svg')
    .png({
      quality: 90
    })
    .toFile('public/payment/payment-methods.png');

  console.log('Image conversion completed successfully!');
}

convertImages().catch(console.error); 