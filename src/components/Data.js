function Data() {
  
  return (
    {
      menu: [
        {
          "title": "Bagels",
          "description": "Bagels are made in house daily.",
          "bagels": [
            "Plain", 
            "Sesame", 
            "Poppy", 
            "Everything", 
            "Cinnamon Raisin", 
            "Honey Wheat", 
            "Onion", 
            "Garlic", 
            "Rosemary Olive", 
            "Jalapeno", 
            "Pumpernickel", 
            "Oat Bran", 
            "Salt", 
            "Cheddar-Parm"
          ],
          "sizes": [
            ["Single", 1.15], 
            ["Half Dozen", 6.30], 
            ["Baker’s Dozen", 10.50]
          ],
          "toppings": [
            ["Cream Cheese", 2.80], 
            ["Schmear of Cream Cheese", 2.30], 
            ["Butter/Margarine", 1.85], 
            ["Schmear Hummus", 3.90], 
            ["Peanut Butter", 2.75 ], 
            ["Peanut Butter & Jelly", 3.85]
          ],
          "cheeseFlavors": [
            "Plain", 
            "Light Plain", 
            "Veggie", 
            "Light Veggie", 
            "Herb Garlic", 
            "Bacon Scallion", 
            "Scallion", 
            "Honey Walnut", 
            "Salmon", 
            "Olive Pimento"
          ],
        },
        {
          "title": "Bagel Sandwiches",
          "description": "Top half of any bagel, toasted, with avocado, red pepper flakes, black sesame seeds, olive oil and a lemon slice",
          "bagelSandwiches": [
            ["BLT Normalo", 6.20],
            ["Your Daddy's BLT", 8.80],
            ["Turkey, Lettuce, Tomato, Onion, Bacon, Monterey Jack and Mayo", 8.00],
            ["Chicken Salad, Lettuce, Tomato, Provolone. and Sprouts Healthy Harvest", 5.75],
            ["Lettuce, Tomato, Cucumber, Green Pepper, Onion, Sprouts", 10.25],
            ["Smoked Salmon, Cream Cheese, Onion, and Capers Avocado Toast", 4.95],
          ],
        },
        {
          "title": "Create Your Own",
          "description": "Starting at $8.00",
          "proteins": ["Roast Turkey", "Ham", "Hummus (house-made)", "Tuna Salad (house-made)", "Chicken Salad (house-made)"],
          "cheeses": ["Cheddar", "Swiss", "American", "Muenster", "Provolone", "Monterey Jack"],
          "condiments": ["Mayo", "Horseradish Mayo", "Honey Mustard", "Pesto", "Dijon Mustard", "Oil & Vinegar"],
          "garnishes": ["Lettuce", "Tomato", "Onion", "Cucumbers", "Green Peppers", "Sprouts", "Jalapeno", "Roasted Red Pepper", "Capers", "Bacon (+1.50)", "Avocado (+1.50)"],
        },
        {
          "title": "Bagel Breakfast Sandwich",
          "description": "Tasty treats, with or without meat!",
          "breakfastSandwiches": [
            ["Scramble Egg", 3.50],
            ["Scramble Egg With Cheese", 4.25],
            ["Scramble Egg With Bacon, Sausage, or Ham", 5.35],
            ["The Mediterranean", 5.95],
            ["Egg, Spinach, Tomato, Avocado, and Pesto The Western", 5.95],
            ["Egg, Ham, Green Pepper, Onion, and Cheddar The Lumberjack", 7.10],
            ["Two Eggs, Sausage, Bacon, American Cheese, and Maple Syrup", 7.60],
          ],
        },
        {
          "title": "Salads",
          "description": "Lettuce Sourced from Feisty Fern Farms",
          "salads": [
            ["Greek", 6.50], 
            ["Caesar", 6.50], 
            ["Garden", 6.50],
          ],
          "addProtein": ["Add Protein", 2.50],
          "proteins": [
            "Grilled Chicken",
            "Hummus (house-made)",
            "Tuna Salad (house-made)",
            "Chicken Salad (house-made)",
          ],
          "dressings": [
            "Homemade Balsamic Vinaigrette",
            "Caesar",
            "Ranch",
            "Honey Ginger",
            "Cucumber Wasabi",
            "Fat-Free Italian",
          ],
        },
        {
          "title": "Soup",
          "description": "Soup served with house-made bagel chips or oyster crackers.",
          "soupSizes": [
            ["Cup", 4.99],
            ["Bowl", 5.99],
          ],
          "currentChoice": "Soup selections vary daily. Please contact the store for the current choices.",
        },
        {
          "title": "Hot Drinks",
          "description": "At Uncommon Grounds, we roast 100 % of our coffee on the premises in small batches. We do this so we can offer you the freshest coffee possible.",
          "titleCoffees": "Coffee",
          "coffees": [
            ["Coffee for here (comes with one free refill)", 1.85],
            ["Coffee to go", 1.90, 2.30, 2.50],
            ["Cappuccino", 3.20, 3.90, 4.20],
            ["Latte", 3.20, 3.90, 4.20],
            ["Vanilla Latte", 3.70, 4.40, 4.70],
            ["Caramel Latte", 3.70, 4.40, 4.70],
            ["Café Mocha", 3.70, 4.40, 4.70],
            ["White Mocha", 4.10, 4.70, 5.10],
            ["Red Eye", 2.95, 3.60, 3.90],
            ["Espresso single", 1.85  ],
            ["Espresso double", 2.10 ],
            ["Hot Chocolate", 2.90, 3.40, 3.65],
            ["White Hot Chocolate", 3.15, 3.75, 4.25],
          ],
          "titleTeas": "Teas",
          "teas": [
            ["Cup of Tea for here", 1.85],
            ["Pot of Tea", 2.70],
            ["Tea to go", 1.90, 2.30, 2.50],
            ["Chai Latte", 3.60, 4.20, 4.60],
            ["Masala Chai Latte", 3.60, 4.20, 4.60],
            ["Matcha Latte", 3.60, 4.20, 4.60],
          ],
          "teaFlavors": [
            "Earl Grey (B)", 
            "English Breakfast (B)", 
            "Tibetan Raspberry (B)", 
            "Apricot (B)", 
            "Madagasgar Vanilla (B)", 
            "Aisably Ceylon (B)", 
            "Mim Estate (B)", 
            "Lucky Dragon (G)", 
            "Genmaicha (G)", 
            "Jasmine (G)", 
            "Monks Blend (G)", 
            "Pai Mu Tan (W)", 
            "Chamomile (H)", 
            "Lavender (H)", 
            "Peppermint (H)", 
            "Thai Lemon (H)", 
            "Orange Echinacea (H)", 
            "Berry Berry (H)", 
            "Blueberry Rooibis (H)",
          ],
        },
        {
          "title": "ColdDrinks",
          "description": "Beat the heat with one of our signature blends.",
          "titleBlends": "Blends",
          "blends": [
            ["Espresso Frappe", 4.05, 4.50],
            ["Espresso Frappe with Oreo", 4.10, 4.85],
          ],
          "titleSmoothies": "Smoothies",
          "descriptionSmoothies": ["Smoothies are blended with real fruit and sweetened with a touch of honey", 5.75],
          "smoothies": [
            "Strawberry Banana", 
            "Mixed Berry", 
            "Green Tropical", 
            "Cocoa-Cold Brew",
          ],
          "titleIcedDrinks": "Iced Drinks",
          "icedDrinks": [
            ["Iced Coffee", 2.60, 3.15],
            ["Cold Brew", 3.15, 3.95],
            ["Iced Tea (House Black, Lavender Chamomile, or Green Citrus Mint)", 2.40, 3.00],
            ["Iced Latte", 3.90, 4.30],
            ["Iced Vanilla Latte", 4.20, 4.60],
            ["Iced Chai", 3.90, 4.35],
            ["Fresh Squeezed Lemonade", 3.00, 3.75],
          ],
        },
        {
          "title": "Baked Goods & Desserts",
          "description": "Variety of cakes and other gourmet desserts sourced locally.",
          "desserts": [
            ["House-made Scones", 2.50 ],
            ["House-made Cookies", 3.25],
            ["Muffins", 2.50],
            ["Biscotti", 3.50],
          ],
        },
      ]
    }
  );
}

export default Data;