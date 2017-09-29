const express = require('express');
const app = express();
const PORT = 8080;
const yelp = require('yelp-fusion');
const {
    clientId,
    clientSecret
} = require('./config');
var telp;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, query, offset');
    req.method === 'OPTIONS' ? res.sendStatus(200) : next();
})

app.use('/yelp', (req, res, next) => {
    yelp.accessToken(clientId, clientSecret).then(response => {
        telp = yelp.client('Xw1__9ZXOGhxRtxzxw5d_uq9XzxSw65GQHGQ1zOvm-hFN9kwgdDSrM00EaSiDPcW4LBqpci41h7J_nXIwhmwwaPKLYifoUwk9s4NFUaDimEItMNyFtsG5Q8Vo1eaWXYx');
        console.log('yelp client', telp);
    }).catch(e => {
        console.log(e);
    });
    next();
})

app.get('/yelp/search', (req, res, next) => {
    const headers = JSON.parse(req.headers.query);
    console.log(headers);
    if (typeof req.headers.query.location === 'string') {
        yelp.accessToken(clientId, clientSecret).then(response => {
            telp.search({
                term: headers.term,
                location: req.headers.query.location || '94030',
                sort: 0,
                radius_filter: 40000,
                category_filter: 'Restaurants',
                offset: req.headers.offset
            }).then(response => {
                console.log(response.jsonBody.businesses[0].name);
                res.json(response.jsonBody.businesses);
            });
        }).catch(e => {
            res.status(500).json({error: e});
        });
    } else {
        yelp.accessToken(clientId, clientSecret).then(response => {
            telp.search({
                term: headers.term,
                latitude: headers.location.lat,
                longitude:headers.location.lng,
                sort: 0,
                radius_filter: 40000,
                category_filter: 'Restaurants',
                offset: req.headers.offset
            }).then(response => {
                console.log(response.jsonBody.businesses[0].name);
                res.json(response.jsonBody.businesses);
            });
        }).catch(e => {
            res.status(500).json({error: e});
        });
    }
})

app.listen(PORT);