require('dotenv').config()
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const request = require('request');

const app = express();
const port = process.env.PORT || 3000;

const viewsPath = path.join(__dirname, "../templates/views");
const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.render("index");
})

app.get('/list', (req, res) => {
    const url = "https://financialmodelingprep.com/api/v3/stock/list?apikey=" + process.env.API_KEY;
    request({url, json: true}, (error, response) => {
        res.render("list", {list: response.body});
    })
})

app.get('/details', (req, res) => {
    const url = "https://financialmodelingprep.com/api/v3/profile/" + req.query.company + "?apikey=" + process.env.API_KEY;
    const quote = "https://financialmodelingprep.com/api/v3/quote/" + req.query.company + "?apikey=" + process.env.API_KEY;
    request({url, json: true}, (error, response) => {
        request({url: quote, json: true}, (error, companyQuote) => {
            res.send({details: response.body, quote: companyQuote.body});
        })
    })
})

app.get('/players', (req, res) => {
    const gainers = "https://financialmodelingprep.com/api/v3/gainers?apikey=" + process.env.API_KEY;
    const losers = "https://financialmodelingprep.com/api/v3/losers?apikey=" + process.env.API_KEY;
    request({url: gainers, json: true}, (error, gainerList) => {
        request({url: losers, json: true}, (error, loserList) => {
            res.send({gainer: gainerList.body, loser: loserList.body});
        })
    })
})

app.get('/news', (req, res) => {
    const url = "https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey=" + process.env.API_KEY;
    request({url, json: true}, (error, response) => {
        res.render("news", {news: response.body});
    })
})

app.listen(port, () => {
    console.log('Server is running on port ' + port);
})