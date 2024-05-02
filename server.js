const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require("method-override");

//---------DATA------
const { homepage } = require("./models/homepage");
const { fruits } = require("./models/fruits");
const { veggies } = require("./models/veggies");
const { meats } = require("./models/meats");
const { recipes } = require("./models/recipes");
const { about } = require("./models/about");
const { worldCuisines } = require("./models/worldCuisines");
// *********** DESSERT NODE VARIABLE ************
const desserts = require("./models/desserts.js");
// *********** PASTRIES NODE VARIABLE ***********
const pastries = require('./models/pastries.js')

// ------ Middleware---------
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use("/", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// add MIDDLEWARE for PUT and DELETE methods

//--------Routes-----------------------------//
//--- Index routes ----//
app.get("/", function (req, res) {
  res.render("homepage/index", { allHomepage: homepage });
});

// ------ Show route -----
app.get("/homepage/:indexOfHomepageArray", (req, res) => {
  let idx = parseInt(req.params.indexOfHomepageArray);
  if (idx >= homepage.length) {
    res.render("404", {});
  } else {
    res.render("homepage/show", { homepage: homepage[idx], id: idx });
  }
});

// ---------- FRUITS --------------------------------
app.get("/fruits", function (req, res) {
  res.render("fruits/index", { allFruits: fruits });
});

// ------ New Route -----
app.get("/fruits/new", (req, res) => {
  res.render("fruits/new.ejs", {});
});

// ------ Show route -----
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  let idx = parseInt(req.params.indexOfFruitsArray);
  if (idx >= fruits.length) {
    res.render("404", {});
  } else {
    res.render("fruits/show", { fruit: fruits[idx], id: idx });
  }
});

// -------- Get Edit page route --------------------------------
app.get("/fruits/:id/edit", (req, res) => {
  const fruit = fruits[req.params.id];
  let id = parseInt(req.params.id);
  res.render("fruits/edit", { fruit, id });
});

app.get("/fruits/:id/delete", (req, res) => {
  const fruit = fruits[req.params.id];
  let id = parseInt(req.params.id);
  res.render("fruits/delete", { fruit, id });
});

// ---- Post new fruit route --------------------------------
// create
app.post("/fruits", (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat === "on") {
    // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect("/fruits");
});

// ------------ VEGGIES --------------------------------
app.get("/veggies", function (req, res) {
  res.render("veggies/index", {
    allFruits: fruits,
    allVeggies: veggies,
    allMeats: meats,
    allRecipes: recipes,
    about: about,
    worldCuisines: worldCuisines,
  });
});

// ------ New Route -----
app.get("/veggies/new", (req, res) => {
  res.render("veggies/new.ejs", {});
});

app.get("/veggies/:indexOfVeggiesArray", function (req, res) {
  let idx = parseInt(req.params.indexOfVeggiesArray);
  if (idx >= veggies.length) {
    res.render("404", {});
  } else {
    res.render("veggies/show", { veggie: veggies[idx], id: idx });
  }
});

// -------- Get Edit page route --------------------------------
app.get("/veggies/:id/edit", (req, res) => {
  const veggie = veggies[req.params.id];
  let id = parseInt(req.params.id);
  res.render("veggies/edit", { veggie, id });
});

app.get("/veggies/:id/delete", (req, res) => {
  const veggie = veggies[req.params.id];
  let id = parseInt(req.params.id);
  res.render("veggies/delete", { veggie, id });
});

// ---- Post new veggie route --------------------------------
// create
app.post("/veggies", (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  veggies.push(req.body);
  res.redirect("/veggies");
});

// ------ MEATS --------------------------------
app.get("/meats", function (req, res) {
  res.render("meats/index", {
    allFruits: fruits,
    allVeggies: veggies,
    allMeats: meats,
    allRecipes: recipes,
    allWorldCuisines: worldCuisines,
  });
});

// ------ New Route -----
app.get("/meats/new", (req, res) => {
  res.render("meats/new.ejs", {});
});

// ------ Show route -----
app.get("/meats/:indexOfMeatsArray", (req, res) => {
  let idx = parseInt(req.params.indexOfMeatsArray);
  if (idx >= meats.length) {
    res.render("404", {});
  } else {
    res.render("meats/show", { meat: meats[idx], id: idx });
  }
});

// -------- Get Edit page route --------------------------------
app.get("/meats/:id/edit", (req, res) => {
  const meat = meats[req.params.id];
  let id = parseInt(req.params.id);
  res.render("meats/edit", { meat, id });
});

app.get("/meats/:id/delete", (req, res) => {
  const meat = meats[req.params.id];
  let id = parseInt(req.params.id);
  res.render("meats/delete", { meat, id });
});

// ---- Post new meat route --------------------------------
// create
app.post("/meats", (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat === "on") {
    // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  meats.push(req.body);
  res.redirect("/meats");
});

app.get("/recipes", function (req, res) {
  res.render("recipes/index", {
    allFruits: fruits,
    allVeggies: veggies,
    allMeats: meats,
    allRecipes: recipes,
    about: about,
    worldCuisines: worldCuisines,
  });
});

app.get("/recipes/:indexOfRecipesArray", (req, res) => {
  let idx = parseInt(req.params.indexOfRecipesArray);
  if (idx >= recipes.length) {
    res.render("404", {});
  } else {
    res.render("recipes/show", { recipe: recipes[idx] });
  }
});

app.get("/about", function (req, res) {
  res.render("about/index", {
    allFruits: fruits,
    allVeggies: veggies,
    allMeats: meats,
    allRecipes: recipes,
    allAbout: about,
    worldCuisines: worldCuisines,
  });
});

app.get("/about/:indexOfAboutArray", (req, res) => {
  let idx = parseInt(req.params.indexOfAboutArray);
  if (idx >= about.length) {
    res.render("404", {});
  } else {
    res.render("about/show", { about: about[idx] });
  }
});

app.get("/world-cuisines", function (req, res) {
  res.render("recipes/index", {
    allFruits: fruits,
    allVeggies: veggies,
    allMeats: meats,
    allRecipes: recipes,
    about: about,
    worldCuisines: worldCuisines,
  });
});

app.get("/world-cuisines/:indexOfWorldCuisinesArray", (req, res) => {
  let idx = parseInt(req.params.indexOfWorldCuisinesArray);
  if (idx >= worldCuisines.length) {
    res.render("404", {});
  } else {
    res.render("world-cuisines/show", { worldCuisine: worldCuisines[idx] });
  }
});

// ********** DESSERT ROUTE ADDITIONS ***********

// ========== DESSERT INDEX ===========
app.get('/desserts', (req, res) => {
  res.render('desserts/index.ejs', {allDesserts: desserts})
})

// ========== DESSERT GET POST PAGE============
app.get('/desserts/new', (req, res) => {
  res.render('desserts/new.ejs')
})

// ========== DESSERT SHOW ============
app.get('/desserts/:indexOfDessertsArray', (req, res) => {
  let idx = parseInt(req.params.indexOfDessertsArray);
  if (idx >= desserts.length) {
      res.render('404.ejs');
  } else {
      res.render('desserts/show.ejs', {dessert: desserts[idx], id: idx});
  }
})

// ========== DESSERT GET PUT PAGE =============
app.get('/desserts/:id/edit', (req, res) => {
  const dessert = desserts[req.params.id];
  let id = parseInt(req.params.id)
  res.render('desserts/edit', { dessert, id })
})

// ========== DESSERT GET DELETE PAGE =============
app.get('/desserts/:id/delete', (req, res) => {
  const dessert = desserts[req.params.id];
  let id = parseInt(req.params.id);
  res.render('desserts/delete', { dessert, id })
})

// ========== DESSERT POST ===========
app.post('/desserts', (req, res) => {
  if (req.body.readyToEat === 'on') {
      req.body.readyToEat = true
  } else {
      req.body.readyToEat = false
  }
  desserts.push(req.body)
  res.redirect('/desserts')
})

// ========== DESSERT PUT ============
app.put('/desserts/:id', (req, res) => {
  console.log('------ UPDATE DESSERT ----------\n', req.body)
  if (req.body.readyToEat === 'on') {
      req.body.readyToEat = true
  } else {
      req.body.readyToEat = false
  }
  desserts[parseInt(req.params.id)] = req.body;
  res.redirect('/desserts')
})

// =========== DESSERT DELETE ==========
app.delete('/desserts/:id', (req, res) => {
  desserts.splice(parseInt(req.params.id), 1);
  res.redirect('/desserts');
});
// *********** END OF DESSERTS ROUTES *************

// *********** PASTRIES ROUTES ADDITION ************

// ========== PASTRIES INDEX ===========
app.get('/pastries', (req, res) => {
  res.render('pastries/index.ejs', {allPastries: pastries})
})

// ========== PASTRY GET POST PAGE============
app.get('/pastries/new', (req, res) => {
  res.render('pastries/new.ejs')
})

// ========== PASTRY GET PUT PAGE =============
app.get('/pastries/:id/edit', (req, res) => {
  const pastry = pastries[req.params.id];
  let id = parseInt(req.params.id)
  res.render('pastries/edit', { pastry, id })
})

// ========== PASTRY GET DELETE PAGE =============
app.get('/pastries/:id/delete', (req, res) => {
  const pastry = pastries[req.params.id];
  let id = parseInt(req.params.id);
  res.render('pastries/delete', { pastry, id })
})

// ========== PASTRY SHOW ============
app.get('/pastries/:indexOfPastriesArray', (req, res) => {
  let idx = parseInt(req.params.indexOfPastriesArray);
  if (idx >= pastries.length) {
      res.render('404.ejs');
  } else {
      res.render('pastries/show.ejs', {pastry: pastries[idx], id: idx});
  }
})

// ========== PASTRY POST ===========
app.post('/pastries', (req, res) => {
  if (req.body.readyToEat === 'on') {
      req.body.readyToEat = true
  } else {
      req.body.readyToEat = false
  }
  pastries.push(req.body)
  res.redirect('/pastries')
})

// =========== PASTRY DELETE ==========
app.delete('/pastries/:id', (req, res) => {
  pastries.splice(parseInt(req.params.id), 1);
  res.redirect('/pastries');
});

// ========== PASTRY PUT ============
app.put('/pastries/:id', (req, res) => {
  console.log('------ UPDATE PASTRY ----------\n', req.body)
  if (req.body.readyToEat === 'on') {
      req.body.readyToEat = true
  } else {
      req.body.readyToEat = false
  }
  pastries[parseInt(req.params.id)] = req.body;
  res.redirect('/pastries')
})


// -----Fruits ID -----
app.put("/fruits/:id", (req, res) => {
  console.log("----- update Fruit ----\n", req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = "true";
  } else {
    req.body.readyToEat = "false";
  }
  fruits[parseInt(req.params.id)] = req.body;
  res.redirect("/fruits"); //  redirect to /fruits route to index page
});

app.delete("/fruits/:id", (req, res) => {
  fruits.splice(parseInt(req.params.id), 1); // remove,
  res.redirect("/fruits");
});

//----- Veggies ID ------
app.put("/veggies/:id", (req, res) => {
  console.log("----- update Veggie ----\n", req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = "true";
  } else {
    req.body.readyToEat = "false";
  }
  veggies[parseInt(req.params.id)] = req.body;
  res.redirect("/veggies"); 
});

app.delete("/veggies/:id", (req, res) => {
  veggies.splice(parseInt(req.params.id), 1); // remove,
  res.redirect("/veggies");
});

// -----Meats ID -----
app.put("/meats/:id", (req, res) => {
  console.log("----- update Fruit ----\n", req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = "true";
  } else {
    req.body.readyToEat = "false";
  }
  meats[parseInt(req.params.id)] = req.body;
  res.redirect("/meats"); //  redirect to /meats route to index page
});

app.delete("/meats/:id", (req, res) => {
  meats.splice(parseInt(req.params.id), 1); // remove,
  res.redirect("/meats");
});

//--------listen for server-------
app.listen(PORT, (req, res) => {
  console.log("listening on port " + PORT);
});
