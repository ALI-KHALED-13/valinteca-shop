import { products } from "../index.js";
import createCard from "./createCard.js";




const updateCart =()=> {
 const addedProducts = products.filter(pdct=> pdct.added_to_cart);

  document.getElementById("count").textContent = addedProducts.length

  const fragment = document.createDocumentFragment();

  for (let pdct of addedProducts){
    const itemCard = createCard(pdct, false);
    fragment.append(itemCard);
  }
  document.getElementById("cart-list").replaceChildren(fragment)
}

export default updateCart;