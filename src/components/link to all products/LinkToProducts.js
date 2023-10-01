import styles from "./LinkToProducts.module.css";
import { Link } from "react-router-dom";

function LinkToProducts(props) {
  return (
    <Link to={props.link} className={styles.orangeButton}>
      See it
    </Link>
  );
}

export default LinkToProducts;
