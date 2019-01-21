const express = require('express');
const helmet = require('helmet');
const vhost = require('vhost'); //Hopefully not needed in prod
const fs = require('fs');
const app = express();

const hostname = "myapp.com";

app.use(helmet());

let demo1 = express.Router();
let demo2 = express.Router();

//Demo1
demo1.get('/', (req, res) => {
  let arr = [];
  fs.readdirSync('./demo1').forEach((val) => {arr.push(val.slice(0, val.indexOf('.')));});
  let articleList = ``;
  arr.forEach((val) => {
    articleList += `<a href='${val.replace(/\-/g, '/')}'>${val}</a><br />`;
  });
  res.send(`Yay, it's the homepage! Here are all of our editions:<br />${articleList}`);
});

demo1.get('/:year([0-9]+)/:month([0-9]+)/:day([0-9]+)', (req, res) => {
  let year = req.params.year;
  let month = req.params.month;
  let day = req.params.day;

  if (!fs.existsSync(`demo1/${year}-${month}-${day}.pdf`)) {
    res.send(`The edition requested cannot be found.`);
  } else {
    let file = fs.createReadStream(`demo1/${year}-${month}-${day}.pdf`);
    let stat = fs.statSync(`demo1/${year}-${month}-${day}.pdf`);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    file.pipe(res);
  }
});

demo1.get('*', (req, res) => {
  res.status(404);
  res.send(`This page does not exist`);
});

//Demo2
demo2.get('/', (req, res) => {
  let header = fs.readFileSync('demo2/header.html');
  let footer = fs.readFileSync('demo2/footer.html');

});

app.use(vhost(`demo1.${hostname}`, demo1));
app.use(vhost(`demo2.${hostname}`, demo2));

app.listen(80);
