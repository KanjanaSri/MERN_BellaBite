import React from "react";
import classes from "./hero.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import meal from "../../assets/meal.svg";

function Hero() {
  return (
    <section id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Explore Our Culinary Wonders</h2>
          <p className={classes.firstMsg}>
            Whether the comfort of <span>home-style</span> cooking
          </p>
          <p className={classes.secondMsg}>
            or the <span>exotic</span> flavors, our diverse menu promises to{" "}
            <span>satisfy</span> every palate.
          </p>
          <p className={classes.desc}>
            Step into a world where passion for food meets exceptional culinary
            craftsmanship.
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Order now!</button>
            <button className={classes.buttonSee}>
              <a href="#foods">
                See what's available <AiOutlineArrowDown />{" "}
              </a>
            </button>
          </div>
        </div>

        <div className={classes.right}>
          <img src={meal} alt="" className={classes.manEatingImg} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
