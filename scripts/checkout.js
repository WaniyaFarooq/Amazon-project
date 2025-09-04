import { increaseQuantity, CalculateCartQuantity, cart, removeFromCart } from "../data/cart.js";
import { deliveryOptions } from "../data/deliveryOptions.js";
import { products } from "../data/products.js";
import formatCurrency from "./utils/money.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

let cartHTML = "";
let matchingItem;
cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  products.forEach((product) => {
    if (product.id === productId) matchingItem = product;

  })

    const deliveryOptionId = cartItem.deliveryOptionId;
   let deliveryOption;
  deliveryOptions.forEach((Option)=>{
    if(deliveryOptionId === Option.id){
deliveryOption = Option;
    }
    });
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.delivaryDays,'days');
    const dateString = deliveryDate.format('dddd, MMMM D');
  
  cartHTML += ` <div class="cart-item-container js-cart-item-container-${matchingItem.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                 ${matchingItem.name}
                </div>
                <div class="product-price">
                 ${formatCurrency(matchingItem.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label js-quantity-label-${cartItem.productId}">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link js-update-quantity-link link-primary" data-product-id ="${cartItem.productId}">
                    Update 
                  </span>
                     <input class="quantity-input js-quantity-input-${cartItem.productId}" type="number">
                     <span class="save-quantity-link  js-save-quantity-link link-primary" data-product-id="${cartItem.productId}">Save</span>

                  <span class="delete-quantity-link link-primary js-delete-cart-product"
                  data-product-id="${cartItem.productId}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
              ${deliveryOptionsHTML(matchingItem,cartItem)}
                    </div>
                  </div>
                </div>
         
              </div>
            </div>
          </div>
`
});

 function deliveryOptionsHTML(matchingItem,cartItem){
  let html  = ''
  deliveryOptions.forEach((deliveryOption) =>{
    const today = dayjs();
const deliveryDate = today.add(deliveryOption.delivaryDays,'days');
const dateString = deliveryDate.format('dddd, MMMM D');
const priceString = deliveryOption.priceCents !== 0 ? `$${formatCurrency(deliveryOption.priceCents)} -` : 'FREE';
const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
html+=
       `<div class="delivery-option">
                  <input type="radio" ${isChecked ? 'checked':''}
                    class="delivery-option-input js-delivery-option-input-${matchingItem.id}"
                    name="delivery-option-${matchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                     ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString} Shipping
                    </div>
                  </div>
                </div>
               `
  });
  return html;
}

document.querySelector('.js-order-summary').innerHTML = cartHTML;

const deleteButtons = document.querySelectorAll('.js-delete-cart-product');
deleteButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const productId = btn.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
    updateCartQuantity();

  });
});
function updateCartQuantity() {

  const cartQuantity = CalculateCartQuantity();

  document.querySelector('.js-return-to-home-link')
    .innerHTML = `${cartQuantity} items`;
}
updateCartQuantity();

let updateBtns = document.querySelectorAll('.js-update-quantity-link');
updateBtns.forEach((btn) => {

  btn.addEventListener('click', () => {
    const productId = btn.dataset.productId;
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    container.classList.add('is-editing-quantity');
  })
});



let SaveBtns = document.querySelectorAll('.js-save-quantity-link');
SaveBtns.forEach((btn) => {

  btn.addEventListener('click', () => {
    const productId = btn.dataset.productId;

    const quantityinput = document.querySelector(`.js-quantity-input-${productId}`);
    const updatedQuantity = Number(quantityinput.value);

    if (updatedQuantity < 0 || updatedQuantity >= 1000) {
      alert('Quantity must be at least 0 and less than 1000');
      return;
    }

    increaseQuantity(productId, updatedQuantity);
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    container.classList.remove('is-editing-quantity');

    const quantityLabel = document.querySelector(
      `.js-quantity-label-${productId}`
    );
    quantityLabel.innerHTML = updatedQuantity;

    updateCartQuantity();

  });
  btn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      btn.click();
    }
  });
});