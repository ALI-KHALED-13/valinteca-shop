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

  const infoDiv = document.createElement("div");
  infoDiv .className = "info";

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = cardData.product_name;

  const price = document.createElement("p");
  price.textContent = formatter.format(cardData.product_price);

  infoDiv .append(cardTitle, price);

  card.append(cardImg, infoDiv)
  
  if (buttons){
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";
    const addButton = createAddButton(cardData);
    const viewButton = createViewButton(cardData);

    actionsDiv.append(addButton, viewButton)
    card.append(actionsDiv);
  }

  return card;
  
}

export default createCard;