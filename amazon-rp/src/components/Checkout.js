import React from "react";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  return (
    <div className="checkout-cart">
      <div className="checkout_left">
        <img src="" alt="" className="checkout_add" />
        <div className="checkout_title">
          <h2> Your Shopping Basket </h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout_right"></div>
    </div>
  );
}

export default Checkout;
