import leafIcon from "./images/leaf-icon.png"
import interior from "./images/interior.jpeg"

export function contactPage () {
  const content = document.querySelector("#content");

  const logo = document.createElement("img");
  logo.src = leafIcon;
  logo.setAttribute("alt", "leaf icon");
  logo.setAttribute("class", "icon");

  const interiorImg = document.createElement("img");
  interiorImg.src = interior;
  interiorImg.setAttribute("alt", "interior of a restaurant");
  interiorImg.setAttribute("class", "contact-image");

  const title = document.createElement("h1");
  title.textContent = "Contact Page";

  const address = document.createElement("p");
  address.textContent = "8, Lebuh Bandar Esok, Bandar Esok, 47888 Petaling Jaya, Selangor, Malaysia"
  address.setAttribute("class", "address")

  const email = document.createElement("p");
  email.textContent = "hello@wilts_saladbar.com"

  const phone = document.createElement("p");
  phone.textContent = "012-3881808";

  const open = document.createElement("p");
  open.textContent = "Open 8am - 4pm Monday to Friday."

  const closed = document.createElement("p");
  closed.textContent = "Closed on weekends and public holidays."

  content.appendChild(interiorImg);
  content.appendChild(title);
  content.appendChild(address);
  content.appendChild(email);
  content.appendChild(phone);
  content.appendChild(open);
  content.appendChild(closed);
  content.appendChild(logo);
}