// requesting http and dotenv modules
const http = require("http");
const dotenv = require("dotenv").config();

// defining port
const port = process.env.PORT;

// creating a server
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Your password</h1> ${process.env.PASSWORD}`);
});

// making the server listen
server.listen(port, function () {
  console.log("Server is running on http://localhost:" + port);
});
