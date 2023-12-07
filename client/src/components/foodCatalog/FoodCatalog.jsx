import React, { useEffect, useState } from "react";
import classes from "./foodCatalog.module.css";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function FoodCatalog() {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const { category } = useParams();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFoodType = async () => {
      const res = await fetch(
        `http://localhost:4000/product?category=${category}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setFilteredFoods(data);
    };

    fetchFoodType();
  }, [category, token]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {filteredFoods?.length && (
          <h2 className={classes.title}>Our {category}</h2>
        )}

        <div className={classes.foods}>
          {filteredFoods?.length ? (
            filteredFoods.map((f) => (
              <Link to={`/food/${f._id}`} key={f._id} className={classes.food}>
                <div className={classes.imgContainer}>
                  <img
                    src={`http://localhost:4000/images/${f?.img}`}
                    alt=""
                    className={classes.foodImg}
                  />
                </div>
                <div className={classes.foodDetails}>
                  <h4 className={classes.foodTitle}>{f?.title}</h4>
                  <span className={classes.price}>
                    <span>$ </span>
                    {f?.price}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <h1 className={classes.noQuantity}>
              Apologies, but {category} are sold out. <br />
              Check out our other tasty options!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodCatalog;
