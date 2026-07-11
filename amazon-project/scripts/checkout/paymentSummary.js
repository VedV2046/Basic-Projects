import {cart} from "../cart.js?v=20260708-1";
import {getProduct} from "../products.js?v=20260708-1";
import {getDeliveryOption} from "../deliveryOptions.js?v=20260708-1";
import {formatCurrency} from "../money.js?v=20260708-1";
import {addOrder} from "../orders.js?v=20260708-1";

export function renderPaymentSummary() {
    let productPriceCents = 0;
    let shippingPriceCents = 0;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        if(!product) {
            return;
        }

        productPriceCents += product.priceCents * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;
    });

    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;

    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    
    const paymentSummaryHTML = 
        `
            <div class="payment-summary-title">
                Order Summary
            </div>

            <div class="payment-summary-row">
                <div>Items (${cartQuantity}):</div>
                <div class="payment-summary-money">
                    $${formatCurrency(productPriceCents)}
                </div>
            </div>

            <div class="payment-summary-row">
                <div>Shipping & Handling:</div>
                <div class="payment-summary-money">
                    $${formatCurrency(shippingPriceCents)}
                </div>
            </div>

            <div class="payment-summary-row subtotal-row">
                <div>Total Before Tax:</div>
                <div class="payment-summary-money">
                    $${formatCurrency(totalBeforeTaxCents)}
                </div>
            </div>

            <div class="payment-summary-row">
                <div>Estimated Tax(10%):</div>
                <div class="payment-summary-money">
                    $${formatCurrency(taxCents)}
                </div>
            </div>

            <div class="payment-summary-row total-row">
                <div>Order Total:</div>
                <div class="payment-summary-money">
                    $${formatCurrency(totalCents)}
                </div>
            </div>
            
            <button class="place-order-button button-primary js-place-order">
                Place Your Order
            </button>
        `;

    document.querySelector('.js-payment-summary')
        .innerHTML = paymentSummaryHTML;

    document.querySelector('.js-place-order')
        .addEventListener('click', async() => {
            try{
                const response = await fetch("https://supersimplebackend.dev/orders", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        cart: cart
                    })
                });

                    const order = await response.json();
                    addOrder(order);
            }
            catch(error) {
                console.log("Unexpected Error. Pls Try again later.");
            }

            window.location.href = "orders.html";
        });   
}
