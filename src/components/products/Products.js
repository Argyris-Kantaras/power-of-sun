import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { useSelector } from "react-redux";

function Products(props) {
  const [exchanger, setExchanger] = useState();
  const currency = useSelector((state) => state.currency);

  useEffect(() => {
    currency === "$" ? setExchanger(0.54) : setExchanger(0.51);
  }, [currency]);
  return (
    <div className={styles.products}>
      {props.products.length > 0
        ? props.products.map((item, i) => {
            if (item.id.includes(props.item)) {
              return (
                <div
                  onClick={() => props.setItemId(item.id)}
                  key={item.id}
                  className={styles.item}
                >
                  <div className={styles.overlay}></div>
                  <div className={styles.itemDetails}>
                    <h3>{item.product}</h3>
                    <img src={item.image} />
                    <p>
                      {Math.ceil(item.price * exchanger)} {currency}
                    </p>
                  </div>
                </div>
              );
            }
            if (props.item === "all") {
              return (
                <div
                  onClick={() => props.setItemId(item.id)}
                  key={item.id}
                  className={styles.item}
                >
                  <div className={styles.overlay}></div>
                  <div className={styles.itemDetails}>
                    <h3>{item.product}</h3>
                    <img src={item.image} />
                    <p>
                      {Math.ceil(item.price * exchanger)} {currency}
                    </p>
                  </div>
                </div>
              );
            }
          })
        : "There was a problem on displaying the products"}
    </div>
  );
}

export default Products;
