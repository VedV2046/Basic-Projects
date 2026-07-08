import {cart} from "../cart.js?v=20260708-1";

export function renderCheckoutHeader() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    const checkoutHeaderHTML = 
        `
        <div class="header-content">
            <div class="checkout-header-left-section">
                <a href="amazon.html">
                    <img class="amazon-logo" src="images/amazon-logo.png" alt="Amazon logo">
                    <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png" alt="Amazon mobile logo">
                </a>
            </div>

            <div class="checkout-header-middle-section">
                Checkout ${cartQuantity} <a class="return-to-home-link" href="amazon.html" title="Return to home">Return to home</a>
            </div>

            <div class="checkout-header-right-section">
                <img src="images/icons/checkout-lock-icon.png" alt="Secure checkout lock icon">
            </div>
        </div>
        `;

    document.querySelector('.js-checkout-header')
        .innerHTML = checkoutHeaderHTML;    
}