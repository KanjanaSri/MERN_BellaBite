import React, { useState, useEffect } from "react";
import classes from "./foodDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { addProduct } from "../../redux/cartSlice";

function FoodDetails() {
  const [foodDetails, setFoodsDetails] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      const res = await fetch(`http://localhost:4000/product/find/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setFoodsDetails(data);
    };

    fetchFoodDetails();
  }, [id, token]);

  const changeQuantity = (command) => {
    if (command === "decrement") {
      if (quantity !== 1) return setQuantity((prev) => (prev -= 1));
    } else if (command === "increment") {
      if (quantity < 21) return setQuantity((prev) => (prev += 1));
    }
  };

  const addToCart = () => {
    dispatch(addProduct({ ...foodDetails, quantity }));
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <img
            src={`http://localhost:4000/images/${foodDetails?.img}`}
            alt=""
          />
        </div>

        <div className={classes.right}>
          <h2 className={classes.title}>{foodDetails?.title}</h2>
          <div className={classes.price}>
            Price: <span>$ </span>
            {foodDetails?.price}
          </div>

          <div className={classes.quantity}>
            <button
              disabled={quantity === 1}
              onClick={() => changeQuantity("decrement")}
            >
              <AiOutlineMinusCircle />
            </button>
            <span className={classes.quantityNumber}>{quantity}</span>
            <button
              disabled={quantity === 20}
              onClick={() => changeQuantity("increment")}
            >
              <AiOutlinePlusCircle />
            </button>
            <span className={classes.quantityMax}>(max 20)</span>
          </div>

          <div className={classes.category}>
            <h3>Category: </h3>
            <span className={classes.categoryName}>
              {foodDetails?.category}
            </span>
          </div>

          <div className={classes.productDesc}>
            <div>Description: </div>
            <p>
              {foodDetails?.desc?.length > 500
                ? `${foodDetails?.desc}`.slice(0, 500) + "..."
                : foodDetails?.desc}
            </p>
          </div>
          <button onClick={addToCart} className={classes.addToCart}>
            Add To Cart <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
