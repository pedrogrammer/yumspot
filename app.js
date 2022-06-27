const path = require('path');

const express = require('express');

const app = express();

const defaultRoutes = require('./routes/default');
const restaurantRoutes = require('./routes/restaurants');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', defaultRoutes);
app.use('/', restaurantRoutes);

app.listen(3000);
