export const cart = [

]

export function addToCart(productId){
  let match;
      cart.forEach((item) => {
        if (productId === item.productId) {
          match = item;
          return;
        }
      });
      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
      const quantity = Number(quantitySelector.value);

      if (match) match.quantity += quantity;
      else {
        cart.push(
          {
            productId,
            quantity
          });
      }
}


 
