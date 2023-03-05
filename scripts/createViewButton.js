import { products } from "../index.js";
import createCard from "./createCard.js";
import renderProducts from "./renderProducts.js";

const modal = document.querySelector(".modal");

const openModal =(ev, cardData)=> {
  modal.style.height = "100%";
  const cardCopy = createCard(cardData);

  modal.replaceChildren(cardCopy);
}

const closeModal =(ev)=> {
  modal.style.height = "0%";
  renderProducts(products);
};

const createViewButton =(cardData)=> {
  const button = document.createElement("button");
  button.className = "view-button";
  
  const viewIcon = new Image();
  viewIcon.src = "/media/view.svg";

  const unviewIcon = new Image();
  unviewIcon.src = "/media/unview.svg";
  
  if (modal.style.height == "100%") {
    button.title = "exit view";
    button.append(unviewIcon, "Exit View")
    button.onclick = closeModal
  } else {
    button.title = "quick view";
    button.append(viewIcon, "quick view");
    button.onclick =(ev)=> openModal(ev, cardData); 
  }
   
  
  return button;
}

export default createViewButton;