const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '..', 'data', 'restaurants.json');

function getStoredRestaurants() {
	const fileData = fs.readFileSync(filePath);
	const storedRestaurants = JSON.parse(fileData);

	return storedRestaurants;
}

function storeRestaurants(storeableRestaurants) {
	fs.writeFileSync(filePath, JSON.stringify(storeableRestaurants));
}

module.exports = {
	getStoredRestaurants: getStoredRestaurants,
	storeRestaurants: storeRestaurants,
};
