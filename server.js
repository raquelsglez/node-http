const http = require('node:http');
const data = require('./data.js');

const server = http.createServer((req, res) => {
  console.log('request recived');
  res.end(`
  <!DOCTYPE html>
  <html lang="${data.language}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
  </head>
  <body>
    <main>
        <div>
            <h1>${data.title}</h1>
            <h2>${data.subtitle}</h2>
            <p>${data.description}</p>
            <p>Adress: ${data.location}</p>
            <p>Contact: <a href="#" title="Enviar correo">${data.contact}</a></p>
        </div>
    </main>
  </body>
  </html>
  `);
});

server.listen(0, () => {
  console.log(
    `server listening on port http://localhost:${server.address().port}`
  );
});
