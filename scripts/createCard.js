import createAddButton from "./createAddButton.js";
import createViewButton from "./createViewButton.js";
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const createCard =(cardData, buttons = true)=> {
  const card = document.createElement("li");
  card.className = "card";

  const cardImg = document.createElement("img");
  cardImg.src = cardData.product_image;
  cardImg.alt = cardData.product_name;

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = cardData.product_name;
  card.setAttribute("id", cardData.product_name.replace(" ", "_"))

  const price = document.createElement("p");
  price.textContent = formatter.format(cardData.product_price);

  card.append(cardImg, cardTitle, price)
  
  if (buttons){
    const addButton = createAddButton(cardData);
    const viewButton = createViewButton(cardData);

    card.append(addButton, viewButton);
  }

  return card;
  
}

export default createCard;