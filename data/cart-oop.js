function Cart(localStorageKey){
const cart = {
cartItems:undefined,

loadFromStorage(){
this.cartItems= JSON.parse(localStorage.getItem('localStorageKey'));
if(!this.cartItems){
this.cartItems=[
    {
 productId:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  quantity:2,
 deliveryOptionId: '1'
},
{ productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
 quantity:7,
  deliveryOptionId: '3'
}];
};
},
saveToStorage(){
    localStorage.setItem('localStorageKey',JSON.stringify(this.cartItems));
},
addToCart(productId){
  let match;
      this.cartItems.forEach((item) => {
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
        this.cartItems.push(
          {
            productId,
            quantity,
            deliveryOptionId:'1'  //default
          });
      };
      this.saveToStorage();
  },
  removeFromCart(productId){
     const newCart =[];
   this.cartItems.forEach((cartItem) => {
    if(cartItem.productId !==productId){
      newCart.push(cartItem);
    }
   });
      this.cartItems = newCart;
      this.saveToStorage();    
},
CalculateCartQuantity(){
      let cartQuantity = 0;
      this.cartItems.forEach((item) => {
        cartQuantity += item.quantity;
      });
      return cartQuantity;

    },
    increaseQuantity(productId,quantity) {
    let matchingItem;

  this.cartItems.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = quantity;

  this.saveToStorage();
  
},
updateDeliveryOption(productId,deliveryOptionId){
  this.cartItems.forEach((product)=>{
   if(product.productId === productId){
    product.deliveryOptionId = deliveryOptionId;
   } 
  });
this.saveToStorage();
}
};

return cart;
}
const cart = Cart('cart-oop');
const bussinessCart = Cart('cart-bussiness');




cart.loadFromStorage();

cons

bussinessCart.loadFromStorage();







