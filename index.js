const express = require('express');
const helmet = require('helmet');
const vhost = require('vhost'); //Hopefully not needed in prod
const fs = require('fs');
const app = express();

const hostname = "myapp.com";

app.use(helmet());

let demo1 = express.Router();
let demo2 = express.Router();

demo1.get('/', (req, res) => {
  res.send(`Yay, it's the homepage!`);
});

demo1.get('/:year/:month/:day', (req, res) => {
  let year = req.params.year;
  let month = req.params.month;
  let day = req.params.day;

  let file = fs.createReadStream(`demo1/${year}-${month}-${day}.pdf`);
  let stat = fs.statSync(`demo1/${year}-${month}-${day}.pdf`);
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  file.pipe(res);
});

demo2.get('/', (req, res) => {
  res.send(`demo2`);
});

app.use(vhost(`demo1.${hostname}`, demo1));
app.use(vhost(`demo2.${hostname}`, demo2));

app.listen(80);
