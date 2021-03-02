import React, { useState } from "react";
import fakeData from "../../../fakeData";
import Cart from "../../Cart/Cart";
import Product from "../Products/Product";
import "./Shop.css";

const Shop = () => {
  const Ten = fakeData.slice(0, 10);
  const [products, setProducts] = useState(Ten);
  const [cart, setCart] = useState([]);

  const handleAddBtn = (goods) => {
    const newCart = [...cart, goods];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        <ul>
          {products.map((product) => (
            <Product product={product} handleAddBtn={handleAddBtn}></Product>
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
