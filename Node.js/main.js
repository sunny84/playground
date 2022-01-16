const http = require('http'); // require는 C언어의 #include와 같은 기능.
const fs = require('fs');

const hostname = '127.0.0.1'; // localhost
const port = 3000; // default 는 80

const server = http.createServer(function(req, res) {
  res.statusCode = 200; // 200은 default 값으로 OK 사인
  //res.writeHead(200);
  res.end('Hello, World\n');
});

var data = 'I create file and write!';
fs.writeFile('message.txt', data, 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

fs.readFile('message.txt', 'utf8', (err, buffer) => {
  if (err) throw err;
  console.log(buffer);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }
  // server.listen(port);
);
