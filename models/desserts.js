const desserts = [
    {
      name: "Blueberry Muffin",
      img: "/img/dessert-placeholder.jpeg",
      prepTime: "15 minutes",
      cookTime: "25 minutes",
      servings: 12,
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup white sugar",
        "1/2 cup milk",
        "1/4 cup vegetable oil",
        "1 egg",
        "2 teaspoons baking powder",
        "1/2 teaspoon salt",
        "1 cup fresh blueberries"
      ],
      instructions: [
        "Preheat oven to 375 degrees F (190 degrees C).",
        "Grease muffin cups or line with muffin liners.",
        "Combine flour, sugar, salt, and baking powder.",
        "Place vegetable oil into a 1 cup measuring cup; add the egg and enough milk to fill the cup.",
        "Mix this with flour mixture.",
        "Fold in blueberries.",
        "Fill muffin cups right to the top.",
        "Bake for 20 to 25 minutes in the preheated oven."
      ],
    },
    {
      name: "Chocolate Muffin",
      img: "/img/dessert-placeholder.jpeg",
      prepTime: "15 minutes",
      cookTime: "20 minutes",
      servings: 12,
      ingredients: [
        "2 cups all-purpose flour",
        "1 cup granulated sugar",
        "3/4 cup chocolate chips",
        "1/2 cup unsweetened cocoa powder",
        "1 teaspoon baking soda",
        "1 egg",
        "1 cup plain yogurt",
        "1/2 cup milk",
        "1/4 cup vegetable oil",
        "1 teaspoon vanilla extract"
      ],
      instructions: [
        "Preheat oven to 400 degrees F (205 degrees C).",
        "Grease muffin cups or line with muffin liners.",
        "Combine flour, sugar, cocoa, baking soda, and chocolate chips.",
        "Stir in egg, yogurt, milk, oil, and vanilla extract.",
        "Fill muffin cups 3/4 full.",
        "Bake for 20 minutes."
      ],
    },
    {
      name: "Cheesecake",
      img: "/img/dessert-placeholder.jpeg",
      prepTime: "30 minutes",
      cookTime: "1 hour",
      servings: 8,
      ingredients: [
        "1 1/2 cups graham cracker crumbs",
        "1/4 cup melted butter",
        "1 cup white sugar",
        "4 (8 ounce) packages cream cheese",
        "1 teaspoon vanilla extract",
        "2 cups sour cream",
        "4 eggs"
      ],
      instructions: [
        "Preheat oven to 350 degrees F (175 degrees C).",
        "Mix graham cracker crumbs with melted butter and press into a pie pan.",
        "In a mixing bowl, beat cream cheese, sugar, and vanilla until smooth.",
        "Blend in eggs one at a time.",
        "Pour filling into crust.",
        "Bake for 50 minutes.",
        "Cool, then refrigerate for at least 3 hours."
      ],
    },
    {
      name: "Vanilla Ice Cream",
      img: "/img/dessert-placeholder.jpeg",
      prepTime: "10 minutes",
      cookTime: "20 minutes (plus freezing time)",
      servings: 8,
      ingredients: [
        "1 cup sugar",
        "2 cups heavy cream",
        "1 cup whole milk",
        "2 teaspoons vanilla extract"
      ],
      instructions: [
        "Stir together milk, cream, sugar, and vanilla.",
        "Pour into the bowl of an ice cream maker.",
        "Churn according to manufacturer's instructions until reached desired consistency.",
        "Transfer to a container and freeze until firm."
      ],
    },
    {
      name: "Chocolate Chip Cookies",
      img: "/img/dessert-placeholder.jpeg",
      prepTime: "15 minutes",
      cookTime: "10 minutes",
      servings: 24,
      ingredients: [
        "1 cup butter, softened",
        "1 cup white sugar",
        "1 cup packed brown sugar",
        "2 eggs",
        "2 teaspoons vanilla extract",
        "3 cups all-purpose flour",
        "1 teaspoon baking soda",
        "2 teaspoons hot water",
        "1/2 teaspoon salt",
        "2 cups semisweet chocolate chips"
      ],
      instructions: [
        "Preheat oven to 350 degrees F (175 degrees C).",
        "Cream together the butter, white sugar, and brown sugar until smooth.",
        "Beat in the eggs one at a time, then stir in vanilla.",
        "Dissolve baking soda in hot water. Add to batter along with salt.",
        "Stir in flour, chocolate chips, and nuts.",
        "Drop by large spoonfuls onto ungreased pans.",
        "Bake for about 10 minutes in the preheated oven, or until edges are nicely browned."
      ],
    },
    {
      name: "Chocolate Lava Cake",
      img: "/img/dessert-placeholder.jpeg",
      prepTime: "20 minutes",
      cookTime: "14 minutes",
      servings: 6,
      ingredients: [
        "1 cup unsalted butter",
        "8 ounces semisweet chocolate",
        "1/2 cup all-purpose flour",
        "1 1/2 cups powdered sugar",
        "3 large eggs",
        "3 egg yolks",
        "1 teaspoon vanilla extract",
        "2 tablespoons orange liqueur (optional)"
      ],
      instructions: [
        "Preheat oven to 425 degrees F (220 degrees C).",
        "Grease 6 custard cups.",
        "Melt the chocolate and butter in the microwave.",
        "Stir in the flour and sugar to chocolate mixture.",
        "Mix in the eggs and yolks until smooth.",
        "Stir in vanilla and liqueur.",
        "Divide the batter evenly among the custard cups.",
        "Place in the oven and bake for 14 minutes.",
        "Edges should be firm but the center will be runny. Run a knife around the edges to loosen and invert onto dessert plates."
      ],
    },
    {
      name: "Cinnamon Roll",
      img: "/img/dessert-placeholder.jpeg",
      prepTime: "20 minutes",
      cookTime: "25 minutes",
      servings: 12,
      ingredients: [
        "1 quart whole milk",
        "1 cup vegetable oil",
        "1 cup sugar",
        "2 packages active dry yeast",
        "8 cups all-purpose flour",
        "1 cup melted butter",
        "1/4 cup ground cinnamon",
        "1/4 cup sugar"
      ],
      instructions: [
        "Heat the milk, vegetable oil, and sugar in a pan until just before boiling. Set aside and cool to lukewarm.",
        "Sprinkle the yeast on top and let it sit on the milk for 1 minute.",
        "Add 8 cups of flour. Stir until just combined, then cover with a clean kitchen towel, and set aside in a relatively warm place for 1 hour.",
        "Roll the dough into a large rectangle. Pour the melted butter over the surface. Sprinkle with ground cinnamon and sugar.",
        "Beginning at the end farthest from you, roll the rectangle tightly towards you. Use both hands to keep the roll tight.",
        "Preheat the oven to 375 degrees F (190 degrees C).",
        "Cut rolls approximately 3/4 inch thick and lay them in a lightly greased baking pans.",
        "Bake for about 20 to 25 minutes until golden brown."
      ],
    }
  ];

  module.exports = desserts;