import leafIcon from "./images/leaf-icon.png"

import seasonalSalad from "./images/seasonal-salad.jpeg";
import meatSalad from "./images/meat-salad.jpeg";
import outsideFood from "./images/outside-food.jpeg";
import juice from "./images/juice.jpeg"
import water from "./images/water.jpeg"
import tea from "./images/tea.jpeg"

export function menuPage() {
  const content = document.querySelector("#content");

  const logo = document.createElement("img");
  logo.src = leafIcon;
  logo.setAttribute("alt", "leaf icon");
  logo.setAttribute("class", "icon");

  const title = document.createElement("h1");
  title.textContent = "Menu";

  //to create menu item cards
  function makeMenuItem(image, altText, name, description){

    const itemDiv = document.createElement("div");
    itemDiv.setAttribute("class", "item-card")

    const itemImg = document.createElement("img");
    itemImg.src = image;
    itemImg.setAttribute("alt", altText);

    const itemName = document.createElement("h3");
    itemName.textContent = name;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;

    itemDiv.appendChild(itemImg);
    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemDescription);

    return itemDiv;
  }

  //--food--
  const foodCategory = document.createElement("h2");
  foodCategory.textContent = "Food";

  const foodItemsGrid = document.createElement("div");
  foodItemsGrid.setAttribute("class", "item-grid");

  //food items
  const seasonalSaladitem = makeMenuItem 
  (
    seasonalSalad,
    "bowl of salad",
    "Seasonal Bowl ($15)",
    "Fresh veggies that change with the season. A different bowl every day! Choose your own dressing at our dressing bar."
  );

  const meatSaladitem = makeMenuItem 
  (
    meatSalad,
    "bowl of salad with meat chunks",
    "Seasonal Bowl with Meat ($17)",
    "It's the Seasonal Bowl but with extra grilled meat from the farmer's market. Gotta get that protein! "
  );

  const outsideFoodItem = makeMenuItem 
  (
    outsideFood,
    "burger and fries",
    "Outside Food ($??? + $5 service charge)",
    "Love the atmosphere here but hate the food? No problem! For a small fee, we can go buy something else from a nearby store."
  );


  //--drinks--
  const drinkCategory = document.createElement("h2");
  drinkCategory.textContent = "Drinks";
  
  const drinkItemsGrid = document.createElement("div");
  drinkItemsGrid.setAttribute("class", "item-grid");

  const juiceItem = makeMenuItem
  (
    juice,
    "2 jars of green juice with leafy greens, cucumber and a granny smith apple",
    "DIY Juice/Smoothie ($10)",
    "Harvest three types of fruits or veggies at the Garden and create your custom juice/smoothie. Not only will you get a workout, you get to pay for the privilege! :)"
  )

  const teaItem = makeMenuItem
  (
    tea,
    "a cup of tea with two flowers next to it",
    "Garden Tea ($8)",
    "Freshly brewed tea with seasonal flowers and herbs. Probably really good for you."
  )

  const waterItem = makeMenuItem
  (
    water,
    "a glass of water",
    "Plain Water (free, obviously)",
    "Just water from the tap. If you feel boring or whatever."
  )

  console.log(typeof content)

  //appends
  content.appendChild(title);

  content.appendChild(foodCategory);
  content.appendChild(foodItemsGrid);

  foodItemsGrid.appendChild(seasonalSaladitem);
  foodItemsGrid.appendChild(meatSaladitem);
  foodItemsGrid.appendChild(outsideFoodItem);

  content.appendChild(drinkCategory);
  content.appendChild(drinkItemsGrid);

  drinkItemsGrid.appendChild(juiceItem);
  drinkItemsGrid.appendChild(teaItem);
  drinkItemsGrid.appendChild(waterItem);

  content.appendChild(logo);  


};