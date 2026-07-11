import { renderCheckoutHeader } from "./checkout/checkoutHeader.js?v=20260708-1";
import { renderOrderSummary } from "./checkout/orderSummary.js?v=20260708-1";
import { renderPaymentSummary } from "./checkout/paymentSummary.js?v=20260708-1";
import {loadProducts, loadProductsFetch} from './products.js?v=20260708-1';
import {loadCart} from './cart.js';
//import '../scripts/cart-class.js';
// import '../scripts/backend-practise.js';

Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then((values) => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});

/*
loadProducts(() => {
    loadCart(() => {
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/