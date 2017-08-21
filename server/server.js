const express = require('express');
const app = express();
const PORT = 8080;
const yelp = require('yelp-fusion');
const {clientId, clientSecret} = require('./config');
var telp;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, query');
    req.method === 'OPTIONS' ? res.sendStatus(200) : next();
})

app.use('/yelp', (req,res,next) => {
    yelp.accessToken(clientId, clientSecret).then(response => {
        telp = yelp.client(response.jsonBody.access_token);
        console.log(telp);
      }).catch(e => {
        console.log(e);
      });
    next();
})

app.get('/yelp/search', (req, res, next) => {
    yelp.accessToken(clientId, clientSecret).then(response => {
        telp.search({
            'term': req.headers.query,
            'location': '94030',
            'sort': 0,
            'radius_filter': 40000,
            'category_filter': 'Restaurants'
        }).then(response => {
            console.log(response.jsonBody.businesses[0].name);
            res.json(response.jsonBody.businesses);
        });
    }).catch(e => {
        console.log(e);
    });
})

app.listen(PORT)