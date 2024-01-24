import styles from "./Currency.module.css";
import usaFlag from "../../images/usa flag.png";
import euFlag from "../../images/eu flag.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Currency() {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  const [boxShadow, setBoxShadow] = useState("€");

  const changeCurrencyHandler = (id) => {
    dispatch({ type: "currencyChange", currency: id });
  };

  useEffect(() => {
    if (currency === "$") {
      setBoxShadow("$");
    } else {
      setBoxShadow("€");
    }
  }, [currency]);

  return (
    <div className={styles.currencyContainer}>
      <img
        onClick={(e) => changeCurrencyHandler(e.target.id)}
        id="€"
        className={styles.currency}
        src={euFlag}
        alt=""
        style={
          currency === "€" ? { boxShadow: "1px 1px 5px 1px yellow" } : null
        }
      />
      <img
        onClick={(e) => changeCurrencyHandler(e.target.id)}
        id="$"
        className={styles.currency}
        src={usaFlag}
        alt=""
        style={
          currency === "$" ? { boxShadow: "1px 1px 5px 1px yellow" } : null
        }
      />
    </div>
  );
}

export default Currency;
