const express = require('express');
var app = express();
require('./router/main.js')(app);

const port = process.env.NODE_PORT || 3000

app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + '/public/styles'));
//app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/jquery', express.static(__dirname + '/jquery'));
app.engine('html', require('ejs').renderFile);

app.listen(port, function () {
  console.log(`starting in port ${port}`);
});