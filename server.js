// requesting http and dotenv modules
const http = require("http");
const dotenv = require("dotenv").config();

// defining port
const port = process.env.PORT;

//  //BONUS
// randomic phrases
const phrases = [
  "Il successo non è la chiave della felicità",
  "La vita è ciò che accade mentre sei occupato a fare altri piani",
  "Il segreto per ottenere ciò che vuoi è credere che già lo possiedi",
  "Non conta quanto lentamente vai, fintanto che ti fermi",
];

let activeIndex = Math.floor(Math.random() * phrases.length);
// function for randomic phrases
const randomText = (array) => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * array.length);
  } while (randomIndex == activeIndex);

  activeIndex = randomIndex;

  return array[randomIndex];
};
// //BONUS

// creating a server
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>Perla del giorno</h1>" + randomText(phrases));
});

// making the server listen
server.listen(port, function () {
  console.log("Server is running on http://localhost:" + port);
});
