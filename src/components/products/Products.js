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
            return (
              <div
                onClick={() => props.setItemId(item.id)}
                key={item.id}
                className={styles.item}
              >
                <div className={styles.overlay}></div>
                <div className={styles.itemDetails}>
                  <img src={item.image} />
                  <div className={styles.bottomPart}>
                    <h4 className={styles.itemTitle}>{item.product}</h4>
                    <p>
                      {Math.ceil(item.price * exchanger)} {currency}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        : "There was a problem on displaying the products"}
    </div>
  );
}

export default Products;
