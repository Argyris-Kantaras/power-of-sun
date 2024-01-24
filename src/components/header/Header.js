import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../images/main-logo.png";
import cart from "../../images/shop-cart-orange.png";
import { useDispatch, useSelector } from "react-redux";
import Currency from "../currency/Currency";
import { useEffect, useState } from "react";

function Header(props) {
  const [itemsInCart, setItemsInCart] = useState();
  const dispatch = useDispatch();
  const addedToCart = useSelector((state) => state.addedToCart);

  useEffect(() => {
    setItemsInCart(addedToCart);
  }, [addedToCart]);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={logo} />
        <h3>Power Of Sun</h3>
      </div>
      <div
        style={
          props.position === "sticky"
            ? { transition: "0.5s", height: "50px" }
            : null
        }
      >
        <nav>
          <Link className={styles.link} to={"/"}>
            Home
          </Link>
          <Link className={styles.productsLink} to={`/products`}>
            Products
          </Link>

          <Link className={styles.link} to={"/systems"}>
            Systems
          </Link>
          <Link className={styles.link} to={"/contact/main"}>
            Contact
          </Link>
        </nav>
        <Currency />
      </div>
      <div className={styles.cart}>
        <img
          className={styles.cartImg}
          onClick={() => {
            dispatch({ type: "showCart", showCart: true });
          }}
          src={cart}
        />
        <span
          style={addedToCart > 0 ? { display: "inline" } : { display: "none" }}
          className={styles.addedToCartCount}
        >
          {itemsInCart && itemsInCart > 0 ? itemsInCart : ""}
        </span>
      </div>
    </div>
  );
}

export default Header;
