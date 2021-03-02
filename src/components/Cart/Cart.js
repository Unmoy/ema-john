import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, pd) => total + pd.price, 0);
  let shipping = 0;
  if (total > 100) {
    shipping = 2.99;
  } else if (total > 0) {
    shipping = 4.99;
  } else if (total <= 0) shipping = 0;

  const tax = (total / 10).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);
  return (
    <div>
      <h1>Order Summary</h1>
      <h4>
        <small>Items Ordered : {cart.length}</small>
      </h4>
      <h4>
        <small>Shipping Cost : {shipping}</small>
      </h4>
      <h4>
        <small>Tax +(VAT): {tax}</small>
      </h4>
      <h3>Total Cost : {grandTotal}</h3>
    </div>
  );
};

export default Cart;
