import { renderOrderSummary } from "./checkout/orderSummary.js";

import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
 import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//  import '../data/backend-practice.js';
import { loadProduct } from "../data/products.js";
loadProduct(()=>{
renderOrderSummary();
renderPaymentSummary();
renderCheckoutHeader();
})


// // import  "../data/cart-class.js";
// 