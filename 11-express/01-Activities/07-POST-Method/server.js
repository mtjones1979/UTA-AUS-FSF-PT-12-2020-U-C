const http = require('http');
const fs = require('fs');
const PORT = 8080;


const handleRequest = (req, res) => {

let requestData = '';

req.on('data', (data) => {
  requestData += data;
});
req.on('end', () => {
    console.log(`You did a ${req.method}, with the data:\n, ${requestData}`);
    
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
      if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
    });

  });
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});