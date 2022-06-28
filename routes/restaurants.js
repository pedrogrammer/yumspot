const express = require('express');

const router = express.Router();

router.get('/confirm', function (req, res) {
	res.render('confirm');
});

router.get('/recommend', function (req, res) {
	res.render('recommend');
});

router.get('/restaurants', function (req, res) {
	res.render('restaurants');
});

router.get('/restaurants/r1', function (req, res) {
	res.render('restaurant-detail');
});

module.exports = router;
