import earphones from "../images/earphones.jpg";
import "../components/CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkout_product">
      <div className="product_image">
        <img src={earphones} className="pngsrc" />
      </div>
      <div className="checkout_details">
        <p className="checkout_info"> Wireless Bluetooth Headphones</p>
        <p className="checkout_price">$20</p>
        <p className="rating"> ** </p>
        <button className="checkout_basket">Add to Basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
