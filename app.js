const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');


app.use(morgan('dev'));


app.use(express.static('/public'));


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache : true});
app.set('view engine', 'html');



app.use(function(err, req, res, next) {
  console.err(err);
  res.status(500).send(err.message);
})

app.listen(3000, () => console.log('I`m here on 3000 listeniiiing'));
