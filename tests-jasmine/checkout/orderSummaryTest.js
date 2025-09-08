import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { addToCart, loadFromStorage, cart } from "../../data/cart.js";
describe('test suite: renderOrderSummary', () => {
    
    it('display the cart', () => {
         document.querySelector('.js-test-container').innerHTML = `<div class="js-order-summary"></div>`;
        
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
                quantity: 2,
                deliveryOptionId: '1'
            },
            {
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 7,
                deliveryOptionId: '3'
            }]);
        });
        loadFromStorage();
       
renderOrderSummary();
    });
});