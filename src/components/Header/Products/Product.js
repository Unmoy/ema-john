import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-detail">
        <h4 className="product-name"> {name} </h4> <br />
        <p>
          <small> Sold By: {seller} </small>
        </p>
        <p>
          <small> Price: $ {price} </small>
        </p>
        <p>
          <small> Only {stock} left in Stock. Order Now. </small>
        </p>
        <button
          onClick={() => props.handleAddBtn(props.product)}
          className="addbtn"
        >
          <FontAwesomeIcon className="icon" icon={faShoppingCart} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
