const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser')
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, query, photoId');
    req.method === 'OPTIONS'
        ? res.sendStatus(200)
        : next()
})

app.get('/getPhotoInfo', (req,res,next) => {
    console.log('hello from server');
    const photoId = req.get('photoId')
        const config = {
            method: 'GET',
            url: `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=0bf0839ee1fe6ee109720782d7ec8a63&photo_id=${photoId}&format=json&nojsoncallback=1`,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios(config).then(photoData => {
            var collection = photoData.data
            res.json(collection);
        })
})

app.get('/getPhotoIds', (req, res, next) => {
    console.log('hello');
    const query = req.get('query')
    const config = {
        method: 'GET',
        url: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0bf0839ee1fe6ee109720782d7ec8a63&safe_search=2&tags=${query}&per_page=80&radius_units=mi&format=json&nojsoncallback=1`,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios(config).then(response => {
        res.json(response.data.photos.photo);
    })
})

app.listen(8080);