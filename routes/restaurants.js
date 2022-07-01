const express = require('express');
const uuid = require('uuid');

const resData = require('../util/restaurant-data');

const router = express.Router();

router.get('/confirm', function (req, res) {
	res.render('confirm');
});

router.get('/recommend', function (req, res) {
	res.render('recommend');
});

router.post('/recommend', function (req, res) {
	const restaurant = req.body;
	restaurant.id = uuid.v4();
	const restaurants = resData.getStoredRestaurants();

	restaurants.push(restaurant);

	resData.storeRestaurants(restaurants);

	res.redirect('/confirm');
});

router.get('/restaurants', function (req, res) {
	const storedRestaurants = resData.getStoredRestaurants();

	res.render('restaurants', { restaurants: storedRestaurants });
});

router.get('/restaurants/r1', function (req, res) {
	res.render('restaurant-detail');
});

module.exports = router;
