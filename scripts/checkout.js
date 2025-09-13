import { renderOrderSummary } from "./checkout/orderSummary.js";

import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
 import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//  import '../data/backend-practice.js';
import { loadProduct,loadProductsFetch } from "../data/products.js";

import { loadCart } from "../data/cart.js";

// Promise.all(
//     [
//     loadProductsFetch(),
//     new  Promise((resolve)=>{
//     loadCart(()=>{
//     resolve('f');
// });
// })
//     ]
// ).then((val)=>{
//     console.log(val);
//  renderOrderSummary();
// renderPaymentSummary();
// renderCheckoutHeader(); 
// });

// new Promise((resolve)=>{
// loadProduct(()=>{

//     resolve();
// });
// }).then(()=>{
// // loadCart (()=>{
// // renderOrderSummary();
// // renderPaymentSummary();
// // renderCheckoutHeader();
// // })  
// return new  Promise((resolve)=>{
//    loadCart (()=>{
// resolve();
// });
// })
// }).then(()=>{
//     renderOrderSummary();
// renderPaymentSummary();
// renderCheckoutHeader();
// });



// // // import  "../data/cart-class.js";
// // 
async function loadPage() {
    try{
    await loadProductsFetch();

    await new  Promise((resolve,reject)=>{
     //   throw 'rtt';
     loadCart(()=>{
     resolve();

     //reject('error3')  //in future
    });});
    }
    catch{
        console.log("error");
    }
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();