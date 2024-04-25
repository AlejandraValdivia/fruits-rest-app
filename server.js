const express = require('express');
const app = express(); // our app
const PORT = process.env.PORT || 3000;

// ------------ DATA -----------------
// inside of fruits.js
const { fruits } = require('./models/fruits');

// ------------ MIDDLEWARE ------------
app.set('view engine', 'ejs');
app.use('/', express.static('public'));

// ------------ ROUTES ---------------
// ******* INDEX ROUTE **********
app.get('/fruits', (req, res) => {
    // send index.ejs with array of fruits
    res.render('fruits/index', { allFruits: fruits });
});

// ******* SHOW ROUTE **********
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    let idx = parseInt(req.params.indexOfFruitsArray);
    if (idx >= fruits.length) {
        // res.send('There is no fruit at that index.'); // one solution
        // res.send(fruits);
        res.render('404', {});
    } else {
        // res.send(fruits[idx]);
        res.render('fruits/show', { fruit: fruits[idx] });
    }
});

// ----------- LISTEN FOR SERVER ----------
app.listen(PORT, () => {
    console.log('🎧 Server is running on PORT 🎧', PORT);
});