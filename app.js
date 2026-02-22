const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8081, () => {  // changed from 8080 to 8081
  console.log('Server running on http://localhost:8081');
});