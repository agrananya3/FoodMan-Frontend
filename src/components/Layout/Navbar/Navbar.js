import React from "react";
import styles from "./Navbar.module.css";

// Image imports
import logo_img from "../../../assets/delivery2.png";
import customer_img from "../../../assets/contact2.png";
import cart_img from "../../../assets/cart_inactive.svg";
// import account_img from "../../../assets/account.png";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <header>
        <nav className={styles.navbar}>
          <div className={styles["nav-container"]}>
            <div className={styles["logo-container"]}>
              <div className={styles["brand-container"]}>
                <div className={styles["logo"]}>
                  <img
                    className={styles["nav-logo"]}
                    src={logo_img}
                    alt="logo-img"
                  />
                </div>
                <div className={styles["brand-name"]}>
                  <h1>The Food's Man</h1>
                </div>
              </div>

              <div className={styles.search}>
                <img src={customer_img} alt="Search" />
                <form>
                  <input
                    className={styles["search-bar"]}
                    type="text"
                    placeholder="Search For Products"
                  />
                </form>
              </div>
            </div>
            <div className={styles["icon-container"]}>
              <div>
                <a className={styles["navbar-link"]} href=" ">
                  <img src={cart_img} alt="Bag" />
                  Bag
                </a>
              </div>

              <div>
                <a className={styles["navbar-link"]} href=" ">
                  <img src={cart_img} alt="Account" />
                  Account
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className={styles["mobile-nav"]}>
        <div>
          <a className={styles["navbar-link"]} href=" ">
            <img src="./images/Home.svg" alt="Bag" />
            Home
          </a>
          <a className={styles["navbar-link"]} href=" ">
            <img src="./images/bag.svg" alt="Bag" />
            Bag
          </a>

          <a className={styles["navbar-link"]} href=" ">
            <img src="./images/acoount.svg" alt="Account" />
            Account
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
