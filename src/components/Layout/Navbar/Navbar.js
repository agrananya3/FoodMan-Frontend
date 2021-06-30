import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import CartModal from "../../Cart/CartModal/CartModal";
import styles from "./Navbar.module.css";
import Account from "../../Account/Account";

// Image imports
import logo_img from "../../../assets/delivery2.png";
import customer_img from "../../../assets/contact2.png";
import cart_img from "../../../assets/cart_inactive.svg";
import account_img from "../../../assets/user.svg";
import home_img from "../../../assets/home.svg";

const Navbar = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [accshown, setaccHandler] = useState(false);

  const acctHandler = (event) => {
    event.preventDefault();
    if (accshown) setaccHandler(false);
    else setaccHandler(true);
  };

  return (
    <React.Fragment>
      <header>
        {accshown && <Account onClick={acctHandler} />}
        <nav className={styles.navbar}>
          <div className={styles["nav-container"]}>
            <div className={styles["logo-container"]}>
              <div className={styles["brand-container"]}>
                <div className={styles["logo"]}>
                  <Link to="/home">
                    <img
                      className={styles["nav-logo"]}
                      src={logo_img}
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <div className={styles["brand-name"]}>
                  <Link to="/home" className={styles.brandName}>
                    The Food's Man
                  </Link>
                </div>
              </div>

              <div className={styles.search}>
                <img src={customer_img} alt="Search" />
                <form>
                  <input
                    className={styles["search-bar"]}
                    type="text"
                    placeholder="Search For Meals"
                  />
                </form>
              </div>
            </div>
            <div className={styles["icon-container"]}>
              <div>
                <NavLink
                  activeClassName={styles.active}
                  className={styles["navbar-link"]}
                  to="/bag"
                >
                  <img src={cart_img} alt="Bag" />
                  Bag
                  {totalQuantity !== 0 && (
                    <CartModal className={styles["cart-modal"]} />
                  )}
                </NavLink>
              </div>

              <div>
                <a
                  href=" "
                  className={styles["navbar-link"]}
                  onClick={acctHandler}
                >
                  <img src={account_img} alt="Account" />
                  Account
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className={styles["mobile-nav"]}>
        <div>
          <NavLink
            to="/home"
            activeClassName={styles.active}
            className={styles["navbar-link"]}
            href=" "
          >
            <img src={home_img} alt="Bag" />
            Home
          </NavLink>
          <NavLink
            to="/bag"
            activeClassName={styles.active}
            className={styles["navbar-link"]}
            href=" "
          >
            <img src={cart_img} alt="Bag" />
            Bag
            {totalQuantity !== 0 && (
              <CartModal className={styles["cart-modal"]} />
            )}
          </NavLink>

          <NavLink
            activeClassName={styles.active}
            className={styles["navbar-link"]}
            to="/orders"
          >
            <img src={account_img} alt="Account" />
            Account
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
