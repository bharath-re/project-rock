import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";

function Checkout() {
  const [{ basket },dispatch] = useStateValue(); // Get the basket from StateProvider

  return (
    <div className="checkout-cart">
      <div className="checkout_left">
        <img src="" alt="" className="checkout_add" />
        <div className="checkout_title">
          <h2>Your Shopping Basket</h2>
          {basket?.length === 0 ? (
            <p>Your basket is empty. Add items to see them here.</p>
          ) : (
            basket.map((item, index) => (
              <CheckoutProduct className='image_size'
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))
          )}
        </div>
      </div>
      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
