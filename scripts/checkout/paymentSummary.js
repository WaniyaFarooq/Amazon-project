import { cart } from "../../data/cart-class.js";
import { deliveryOptions,getDeliveryOption } from "../../data/deliveryOptions.js";
import { products,getProduct } from "../../data/products.js";
import formatCurrency from "../utils/money.js";

export function renderPaymentSummary(){
    let html ='';
    let totalItems =0;
    let totalItemsCost = 0;
    let totalShipping = 0;
      
  //  const totalCostWithTax  = Tax + totalCostWithShipping ;
    
function calculateTax(amount,percentage){
return (amount*percentage)/100;
}
   
    
        cart.cartItems.forEach(element => {
           totalItems+=element.quantity;
           const matchingItem = getProduct(element.productId);
                totalItemsCost+=element.quantity*matchingItem.priceCents;
             const deliveryopt = getDeliveryOption(element.deliveryOptionId);
                totalShipping+=deliveryopt.priceCents;
          
            });
            const totalCostWithShipping = totalShipping+totalItemsCost;
             const  Tax = calculateTax(totalCostWithShipping,10);
                const totalCostWithTax  = Tax + totalCostWithShipping ;
            
           
           
    
    
    html+=`
 <div class="payment-summary">
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${totalItems}):</div>
            <div class="payment-summary-money">$${formatCurrency(totalItemsCost)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(totalShipping)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCostWithShipping)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(Tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCostWithTax)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        `
        document.querySelector('.js-payment-summary').innerHTML = html;

}

