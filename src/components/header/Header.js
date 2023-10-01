import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../images/logo12.jpg";
import cart from "../../images/shop-cart.png";
import { useDispatch, useSelector } from "react-redux";
import Currency from "../currency/Currency";
import Searchbar from "./Searchbar";
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
      <img
        style={
          props.position === "sticky"
            ? { width: "0px", transition: "0.5s", opacity: "0" }
            : null
        }
        className={styles.logoImg}
        src={logo}
      />
      {/* <Searchbar /> */}
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
            <ul className={styles.productsList}>
              <li onClick={() => props.setShowItems("all")} id="all">
                All
              </li>
              <li onClick={() => props.setShowItems("panel")} id="panel">
                Solar panels
              </li>
              <li onClick={() => props.setShowItems("inverter")} id="inverter">
                Inverters
              </li>
              <li onClick={() => props.setShowItems("lithium")} id="lithium">
                Lithium batteries
              </li>
              <li onClick={() => props.setShowItems("acid")} id="acid">
                Lead acid batteries
              </li>
            </ul>
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
