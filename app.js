const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


const app = express();

const port = 3000;

// app.use(express.limit('50MB'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/dist/portfolio'));

app.use(function (req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'portfolio', 'index.html'));
});


// Server connection API

const server = http.createServer(app);
server.listen(process.env.PORT || port, () =>{
  console.log('Server running at port ', port);
});


