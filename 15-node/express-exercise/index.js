const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const alpha = require('alphavantage')({ key: 'qweqweqwe' });

const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

const apiKey = '03e7e5e640msh2164bc2c017c788p1bf94bjsn5dd033d7d390';

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/info', (req, res) => {
  axios.get('https://alpha-vantage.p.rapidapi.com/query', {
    params: {
      function: 'GLOBAL_QUOTE',
      symbol: req.query.stockCode,
      datatype: 'json'
    },
    headers: {
      'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
      'x-rapidapi-key': apiKey
    }
  }).then((response) => {
    res.json(response.data);
  }).catch((err) => {
    console.error(err);
    res.json(err);
  })
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));
