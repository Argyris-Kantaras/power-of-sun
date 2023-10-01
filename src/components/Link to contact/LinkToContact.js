import { useDispatch } from "react-redux";
import styles from "./LinkToContact.module.css";

function LinkToContact(props) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({
      type: "add",
      itemId: props.item,
    });
    props.setItemId("");
    props.setOverlayDisplay("hidden");
  };

  return (
    <div onClick={addToCart} className={styles.orangeButton}>
      Add to cart
    </div>
  );
}
export default LinkToContact;
