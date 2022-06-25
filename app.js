const path = require('path');

const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/about', function (req, res) {
	res.render('about');
});

app.get('/confirm', function (req, res) {
	res.render('confirm');
});

app.get('/recommend', function (req, res) {
	res.render('recommend');
});

app.get('/restaurants', function (req, res) {
	res.render('restaurants');
});

app.get('/restaurants/r1', function (req, res) {
	res.render('restaurant-detail');
});

app.listen(3000);
