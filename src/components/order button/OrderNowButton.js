import { useSelector } from "react-redux";
import styles from "./OrderNowButton.module.css";
import { Link } from "react-router-dom";

function OrderNowButton(props) {
  const addedProducts = useSelector((state) => state.addedProducts);

  return (
    <Link
      to={`/contact/${props.ids}`}
      style={
        addedProducts.length > 0 ? { display: "block" } : { display: "none" }
      }
      className={styles.orderBtn}
    >
      Order now
    </Link>
  );
}

export default OrderNowButton;
