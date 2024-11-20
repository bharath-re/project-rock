import "../components/CheckoutCart.css";
function CheckoutCart() {
  return (
    <div className="checkout_component">
      <p className="subtotal"> Subtotal (2 items ) $25$</p>
      <button className="checkout_button"> Proceed to Checkout </button>
    </div>
  );
}

export default CheckoutCart;
