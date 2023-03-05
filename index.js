
import renderProducts from "./scripts/renderProducts.js";
import updateCart from "./scripts/updateCart.js";


export const products = JSON.parse(localStorage.getItem("products")) || [
  {
    product_name: "Car Mug",
    product_price: "40.50",
    product_image: "./media/car_mug.jpg",
    added_to_cart: false,
  },
  {
    product_name: "Dad Mug",
    product_price: "55.56",
    product_image: "./media/dad_mug.jpg",
    added_to_cart: false,
  },
  {
    product_name: "Dream Mug",
    product_price: "35.50",
    product_image: "./media/dream_mug.jpg",
    added_to_cart: false,
  },
  {
    product_name: "King Mug",
    product_price: "40.50",
    product_image: "./media/king_mug.png",
    added_to_cart: false,
  },
  {
    product_name: "Love Mug",
    product_price: "33.69",
    product_image: "./media/love_mug.jpg",
    added_to_cart: false,
  },
  {
    product_name: "Red Mug",
    product_price: "60",
    product_image: "./media/red_mug.jpg",
    added_to_cart: false,
  }
];

renderProducts(products);

updateCart();

window.addEventListener("beforeunload", ()=> {
  localStorage.setItem("products", JSON.stringify(products));
});