import createCard from "./createCard.js";

const renderProducts =(products)=> {
  const fragment = document.createDocumentFragment();
  for (let product of products){
    const card = createCard(product);
    fragment.append(card);
  }
  
  document.getElementById("products_list").replaceChildren(fragment);
}


export default renderProducts