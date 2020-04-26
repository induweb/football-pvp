const express = require("express");
const app = express();
const server = require("http").Server(app);

app.use( express.static("public") );

app.get("/", function(req, res) {

    res.send('siemano');

});

server.listen(8080, function() {

    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");

});