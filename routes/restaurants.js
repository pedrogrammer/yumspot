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

router.get('/restaurants/:id', function (req, res) {
	const restaurantID = req.params.id;

	const storedRestaurants = resData.getStoredRestaurants();

	for (const restaurant of storedRestaurants)
		if (restaurant.id === restaurantID)
			return res.render('restaurant-detail', { restaurant: restaurant });

	res.status(404).render('404');
});

module.exports = router;
