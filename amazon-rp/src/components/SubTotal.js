import React from "react";
import "./SubTotal.css";

function SubTotal() {
  const subtotal = 49.99; // Example subtotal value

  // Basic currency formatter
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal (1 item): <strong>{formatCurrency(subtotal)}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to checkout </button>
    </div>
  );
}

export default SubTotal;
