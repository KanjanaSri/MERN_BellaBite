import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./navbar.module.css";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { products } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/" className={classes.title}>
            BellaBite Fusion
          </Link>
        </div>

        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <a href="/">Home</a>
            </li>
            <li className={classes.listItem}>
              <a href="/#contacts">Contacts</a>
            </li>
            <li className={classes.listItem}>
              <a href="/#foods">Foods</a>
            </li>
            <li className={classes.listItem}>
              <a href="/#faq">FAQ</a>
            </li>
            <li className={classes.listItem}>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </div>

        <div className={classes.right}>
          <FiUser className={classes.userIcon} />
          <Link to="/cart" className={classes.cartContainer}>
            <FiShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>{products.length}</div>
          </Link>

          {token ? (
            <button onClick={handleLogout} className={classes.logInOut}>
              Logout
            </button>
          ) : (
            <button onClick={handleLogin} className={classes.logInOut}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
