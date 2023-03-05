import updateCart from "./updateCart.js";


const handleClick =(ev, cardData, addIcon, removeIcon)=> {
  cardData.added_to_cart = !cardData.added_to_cart;
  if (cardData.added_to_cart){
    addIcon.replaceWith(removeIcon);
    ev.currentTarget.lastChild.replaceWith("Remove");
    ev.currentTarget.title = "remove from cart"
  } else {
    removeIcon.replaceWith(addIcon);
    ev.currentTarget.lastChild.replaceWith("Add");
    ev.currentTarget.title = "add to cart"
  }
  updateCart();
}

const createAddButton =(cardData)=> {
  const button = document.createElement("button");
  button.className = "add-button";
  
  const addIcon = new Image();
  addIcon.src = "../media/cart-plus.svg";
  const removeIcon = new Image();
  removeIcon.src = "../media/cart-minus.svg";

  if (cardData.added_to_cart){
    button.title = "remove from cart";
    button.append(removeIcon, "Remove");
  } else {
    button.title = "add to cart";
    button.append(addIcon, "Add"); 
  }

  button.onclick = (ev)=> handleClick(ev, cardData, addIcon, removeIcon);
  
  return button;
}

export default createAddButton;