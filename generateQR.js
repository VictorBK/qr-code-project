const QRCode = require('qrcode');

const linktreeURL = 'https://linktr.ee/victor_kanyanga'; 

QRCode.toFile('qrcode.png', linktreeURL, {
    color: {
        dark: '#000000', // QR code color
        light: '#FFFFFF' // Background color
    }
}, function (err) {
    if (err) throw err;
    console.log('QR Code generated successfully!');
});
