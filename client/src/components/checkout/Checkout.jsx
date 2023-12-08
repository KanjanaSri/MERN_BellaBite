import React from "react";
import classes from "./checkout.module.css";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Order Confirmed!</h2>
        <p>Your order has been placed successfully</p>

        <Link to={"/"}>Continue Shopping</Link>
      </div>
    </div>
  );
}

export default Checkout;
