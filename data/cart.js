export let cart = [
    {
 productId:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
 quantity:2
},
{ productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
 quantity:7
}
];

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

export function removeFromCart(productId){
     const newCart =[];
   cart.forEach((cartItem) => {
    if(cartItem.productId !==productId){
      newCart.push(cartItem);
    }
   });
      cart = newCart;
}
 
