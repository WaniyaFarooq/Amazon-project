import { cart } from "../../data/cart-class.js";

function updateCartQuantity() {
  const cartQuantity = cart.CalculateCartQuantity();
  document.querySelector('.js-return-to-home-link')
    .innerHTML = `${cartQuantity} items`;
}

export function renderCheckoutHeader() {
  const html = `
    <div class="checkout-header">
      <div class="header-content">
        <div class="checkout-header-left-section">
          <a href="amazon.html">
            <img class="amazon-logo" src="images/amazon-logo.png">
            <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png">
          </a>
        </div>

        <div class="checkout-header-middle-section">
          Checkout (<a class="return-to-home-link js-return-to-home-link"
            href="amazon.html"></a>)
        </div>

        <div class="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png">
        </div>
      </div>
    </div>`;

  document.querySelector('.js-checkout-header').innerHTML = html;

  // ab update karo
  updateCartQuantity();

}
