
export let cart ;
loadFromStorage();
export function loadFromStorage(){
 cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){

cart =[
    {
 productId:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  quantity:2,
 deliveryOptionId: '1'
},
{ productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
 quantity:7,
  deliveryOptionId: '3'
}
];
};
}
export function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
};

export function addToCart(productId){
  let match;
      cart.forEach((item) => {
        if (productId === item.productId) {
          match = item;
          return;
        }
      });
      
// const quantitySelector = document.querySelector(
//         `.js-quantity-selector-${productId}`
//       );
//       const quantity = Number(quantitySelector.value);
let quantity = 1;
      if (match) match.quantity += quantity;
      else {
        cart.push(
          {
            productId,
            quantity,
            deliveryOptionId:'1'  //default
          });
      };
      saveToStorage();
     

  }

export function removeFromCart(productId){
     const newCart =[];
   cart.forEach((cartItem) => {
    if(cartItem.productId !==productId){
      newCart.push(cartItem);
    }
   });
      cart = newCart;
      saveToStorage();
    
}

export function CalculateCartQuantity(){
      let cartQuantity = 0;
      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });
      return cartQuantity;

}
export function increaseQuantity(productId,quantity) {
    let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = quantity;

  saveToStorage();
  
}

export function updateDeliveryOption(productId,deliveryOptionId){
  cart.forEach((product)=>{
   if(product.productId === productId){
    product.deliveryOptionId = deliveryOptionId;
   } 
  });
saveToStorage();
}