// server.js

// init project
var express = require('express');
var app = express();

var multer = require('multer')
var upload = multer({ dest: 'uploads/' })


app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/getMetadata", upload.any(), function (request, response) {
  response.json(request.files.map(file => ({
    filename: file.originalname,
    encoding: file.encoding,
    mimetype: file.mimetype,
    size: file.size
  }))[0]);
});


var listener = app.listen(process.env.PORT, function () {
  console.log('App started on port ' + listener.address().port);
});
