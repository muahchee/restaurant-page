import "./styles.css";

import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";


const content = document.querySelector("#content");

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");


// empty content div
function emptyDiv(){
  while (content.firstChild){
    content.removeChild(content.lastChild);
  }
}

homeBtn.addEventListener("click", () => {
  emptyDiv();
  homePage();
  console.log("home buttpn")
})

menuBtn.addEventListener("click", () => {
  emptyDiv();
  menuPage();
})

contactBtn.addEventListener("click", () => {
  emptyDiv();
  contactPage();
})

homePage();

const shopName = document.createElement("p");
shopName.textContent = "Wilt's Salad Bar © 2025-eternity"
shopName.setAttribute("class", "shopName")

document.body.appendChild(shopName)


