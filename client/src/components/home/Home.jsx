import React from "react";
import classes from "./home.module.css";
import Hero from "../hero/Hero";
import illustration1 from "../../assets/salad.svg";
import illustration2 from "../../assets/time.svg";
import illustration3 from "../../assets/order.svg";
import Foods from "../foods/Foods";
import Newsletter from "../newsletter/Newsletter";

function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitle}>Delivery</span>
            <h2 className={classes.deliveryTitle}>
              Express Delivery Straight to Your Doorstep!
            </h2>
          </div>

          <div className={classes.deliveryInfos}>
            <div className={classes.deliveryInfo}>
              <img src={illustration1} alt="" className={classes.firstImg} />
              <h3>Fresh & Fast</h3>
            </div>

            <div className={classes.deliveryInfo}>
              <img src={illustration2} alt="" className={classes.secondImg} />
              <h3>On-Time Dining</h3>
            </div>

            <div className={classes.deliveryInfo}>
              <img src={illustration3} alt="" className={classes.thirdImg} />
              <h3>Track Your Treat</h3>
            </div>
          </div>
        </div>

        <Foods />
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
