const pastries = [
    {
      name: "Croissant",
      img: "/img/pastry-placeholder.jpeg",
      prepTime: "4 hours",
      cookTime: "15 minutes",
      servings: 12,
      ingredients: [
        "4 cups all-purpose flour",
        "1/2 cup water",
        "1/2 cup milk",
        "1/4 cup granulated sugar",
        "2 teaspoons salt",
        "1 tablespoon instant yeast",
        "1 1/4 cups unsalted butter, cold",
        "1 egg, for egg wash"
      ],
      instructions: [
        "Combine flour, sugar, salt, and yeast in a large bowl.",
        "Add water and milk, mix until dough forms.",
        "Knead dough for 5 minutes, then refrigerate for 1 hour.",
        "Roll out dough into a rectangle, place cold butter in the center, and fold dough over it.",
        "Roll out again into a rectangle, fold into thirds. Refrigerate for 1 hour.",
        "Repeat rolling and folding two more times, refrigerating between each.",
        "Cut dough into triangles, roll up from the base to form croissants.",
        "Place on a baking sheet, let rise for 1 hour.",
        "Brush with egg wash, bake at 400 degrees F (200 degrees C) for 15 minutes or until golden."
      ],
    },
    {
      name: "Danish Pastry",
      img: "/img/pastry-placeholder.jpeg",
      prepTime: "5 hours",
      cookTime: "20 minutes",
      servings: 12,
      ingredients: [
        "3 1/2 cups all-purpose flour",
        "1/2 cup milk",
        "1/4 cup sugar",
        "2 1/4 teaspoons active dry yeast",
        "1 teaspoon salt",
        "2 eggs",
        "1 cup unsalted butter, cold"
      ],
      instructions: [
        "Warm the milk, then add yeast and sugar to it. Let it activate for 5 minutes.",
        "Mix flour and salt in a large bowl. Add eggs and the yeast mixture. Combine into a dough.",
        "Roll out dough and place slices of butter on top. Fold and roll several times, refrigerating between each.",
        "After final roll, cut into desired shapes and add fruit or cheese fillings.",
        "Proof for 2 hours.",
        "Bake at 375 degrees F (190 degrees C) for 20 minutes."
      ],
    },
    {
      name: "Puff Pastry",
      img: "/img/pastry-placeholder.jpeg",
      prepTime: "15 minutes",
      cookTime: "20 minutes",
      servings: 12,
      ingredients: [
        "2 cups all-purpose flour",
        "1 1/4 cups butter, cold",
        "1/2 teaspoon salt",
        "1/2 cup ice water"
      ],
      instructions: [
        "Mix flour and salt, then cut in butter to form pea-sized crumbs.",
        "Gradually add ice water, stirring until the mixture forms a dough.",
        "Roll out dough into a rectangle, fold into thirds, and turn 90 degrees. Repeat rolling and folding five times.",
        "Refrigerate for 30 minutes between each set of folds.",
        "Roll to desired thickness, then cut into shapes and bake as needed for your recipe.",
        "Bake at 400 degrees F (200 degrees C) until puffed and golden."
      ],
    },
    {
      name: "Apple Strudel",
      img: "/img/pastry-placeholder.jpeg",
      prepTime: "1 hour",
      cookTime: "45 minutes",
      servings: 8,
      ingredients: [
        "1/2 cup raisins",
        "3 tablespoons rum",
        "2 pounds apples, peeled and sliced",
        "1/2 cup sugar",
        "1/2 teaspoon cinnamon",
        "1/2 cup breadcrumbs",
        "1/4 cup melted butter",
        "12 sheets phyllo dough"
      ],
      instructions: [
        "Soak raisins in rum for 30 minutes.",
        "Mix apples with sugar, cinnamon, and raisins.",
        "Toast breadcrumbs in butter until golden.",
        "Layer phyllo sheets, brushing each with butter.",
        "Spread breadcrumbs, then apple mixture on top.",
        "Roll up carefully, seal ends, and brush with butter.",
        "Bake at 375 degrees F (190 degrees C) for about 45 minutes."
      ],
    },
    {
      name: "Beignets",
      img: "/img/pastry-placeholder.jpeg",
      prepTime: "2 hours",
      cookTime: "5 minutes",
      servings: 12,
      ingredients: [
        "3 cups all-purpose flour",
        "1/4 cup sugar",
        "1/2 teaspoon salt",
        "1 tablespoon active dry yeast",
        "1 cup warm water",
        "1 egg",
        "1/2 cup evaporated milk",
        "Vegetable oil for frying",
        "Powdered sugar for dusting"
      ],
      instructions: [
        "Mix yeast with warm water and a pinch of sugar. Let it bloom for 10 minutes.",
        "Combine flour, sugar, and salt. Add yeast mixture, egg, and milk.",
        "Knead into a smooth dough, let rise for 1.5 hours.",
        "Roll out dough, cut into squares.",
        "Fry in hot oil until puffed and golden.",
        "Drain on paper towels and dust with powdered sugar."
      ],
    },
    {
      name: "Éclair",
      img: "/img/pastry-placeholder.jpeg",
      prepTime: "1 hour",
      cookTime: "35 minutes",
      servings: 10,
      ingredients: [
        "1 cup water",
        "1/2 cup butter",
        "1 cup all-purpose flour",
        "1/4 teaspoon salt",
        "4 large eggs",
        "1 cup heavy cream, whipped",
        "1/2 cup chocolate ganache"
      ],
      instructions: [
        "Preheat oven to 425 degrees F (220 degrees C).",
        "Bring water and butter to a boil. Add flour and salt all at once, stir vigorously until mixture forms a ball.",
        "Remove from heat, beat in eggs one at a time until smooth.",
        "Pipe dough into oblong shapes on a baking sheet.",
        "Bake for 15 minutes, then reduce oven to 375 degrees F (190 degrees C) and bake for 20 more minutes.",
        "Cool completely, fill with whipped cream, and top with chocolate ganache."
      ],
    },
    {
      name: "Scones",
      img: "/img/pastry-placeholder.jpeg",
      prepTime: "15 minutes",
      cookTime: "20 minutes",
      servings: 8,
      ingredients: [
        "2 cups all-purpose flour",
        "1/3 cup sugar",
        "1 teaspoon baking powder",
        "1/4 teaspoon baking soda",
        "1/2 teaspoon salt",
        "8 tablespoons unsalted butter, frozen",
        "1/2 cup raisins (optional)",
        "1/2 cup sour cream",
        "1 large egg"
      ],
      instructions: [
        "Preheat oven to 400 degrees F (200 degrees C).",
        "Mix flour, sugar, baking powder, baking soda, and salt.",
        "Grate butter into flour mixture using the large holes of a box grater, mix into flour.",
        "Stir in raisins, sour cream, and egg until just combined.",
        "Press dough into a ball and knead briefly on a floured surface.",
        "Cut dough into wedges and place on a prepared baking sheet.",
        "Bake for 15 to 20 minutes or until golden brown."
      ],
    }
  ];

module.exports = pastries;