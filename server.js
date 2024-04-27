const express = require('express');
const app = express(); // our app
const PORT = process.env.PORT || 3000;

// ------------ DATA -----------------
// inside of fruits.js
const { fruits } = require('./models/fruits');

// ------------ MIDDLEWARE ------------
app.set('view engine', 'ejs');
app.use('/', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------------ ROUTES ---------------
// ******* INDEX ROUTE **********
app.get('/fruits', (req, res) => {
    // send index.ejs with array of fruits
    res.render('fruits/index', { allFruits: fruits });
});

// ********** NEW ROUTE **********
app.get('/fruits/new', (req, res) => {
    res.render('fruits/new.ejs', {});
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

// ********** POST NEW FRUIT ************
app.post('/fruits', (req, res) => {
    console.log('---------- FORM BODY ---------\n', req.body);
    // add more code here
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else { // req.body.readyToEat will be undefined (unchecked)
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits');
});

// ----------- LISTEN FOR SERVER ----------
app.listen(PORT, () => {
    console.log('🎧 Server is running on PORT 🎧', PORT);
});