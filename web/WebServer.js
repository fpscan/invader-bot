const http = require('http');
  
const server = http.createServer((req, res) => {
  res.end("Hello! This is the webserver for "+process.env.PROJECT_DOMAIN);
}).listen(3000);

console.log("WebServer is online!");

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);