import salad1 from "./images/salad1.jpeg"
import leafIcon from "./images/leaf-icon.png"

export function homePage() {
  const logo = document.createElement("img");
  logo.src = leafIcon;
  logo.setAttribute("alt", "leaf icon");
  logo.setAttribute("class", "icon");

  const content = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Wilt's Salad Bar";
  
  const tagline = document.createElement("h2");
  tagline.textContent = "Regularly fresh bowls to keep you regular.";
  
  const mainImage = document.createElement("img");
  mainImage.src = salad1;
  mainImage.setAttribute("alt", "Green leafy veggies in white bowl");
  
  const aboutText = document.createElement("p");
  aboutText.textContent = "Here at Wilt's Salad Bar, healthy doesn't have to be at the expense of tasty! Our fresh organic veggies are hand picked from our Garden at the back. Feel free to pop by and see nature's magic happen."


  content.appendChild(title);
  content.appendChild(tagline);
  content.appendChild(mainImage);
  content.appendChild(aboutText); 
  content.appendChild(logo);   
}



