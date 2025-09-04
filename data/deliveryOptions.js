
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import formatCurrency from "../scripts/utils/money.js"; 

export const  deliveryOptions = [
    {
        id: '1',
        deliveryDays:7,
        priceCents:0,

    },
     {
        id: '2',
        deliveryDays:3,
        priceCents:499,
        
    },
    {
        id: '3',
        deliveryDays:1,
        priceCents:999,
        
    }
];
export function getDeliveryOption(deliveryOptionId){
    
    let deliveryOption;
    deliveryOptions.forEach((Option) => {
      if (deliveryOptionId === Option.id) {
        deliveryOption = Option;
      }
    });
    return deliveryOption || deliveryOptions[0];
}
