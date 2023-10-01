import { useEffect, useRef, useState } from "react";
import styles from "./CartProduct.module.css";
import { useSelector } from "react-redux";
import RemoveItem from "../cart/remove item/RemoveItem";
// import TotalAmount from "../cart/total amount/TotalAmount";
// import manipulateQty from "../cart/total amount/TotalAmount";

function CartProduct(props) {
  const [quantity, setQuantity] = useState(1);
  const [action, setAction] = useState("");
  const currency = useSelector((state) => state.currency);
  const addedProducts = useSelector((state) => state.addedProducts);

  const increaseRef = useRef();

  useEffect(() => {
    if (props.totalAmount === 0) props.setTotalAmount(props.item.price);
    if (props.totalAmount > 1 && action === "") {
      props.setTotalAmount(props.totalAmount + props.item.price);
    }
    if (action === "increase") {
      if (addedProducts.length > 1) {
        props.setTotalAmount(props.totalAmount + props.item.price);
      } else {
        props.setTotalAmount(props.item.price * quantity);
      }
    }

    if (action === "decrease") {
      if (addedProducts.length > 1 && quantity > 0) {
        props.setTotalAmount(props.totalAmount - props.item.price);
      }
      if (addedProducts.length === 1) {
        props.setTotalAmount(props.item.price * quantity);
      }
    }
  }, [quantity, action, addedProducts]);

  const manipulateQty = (action) => {
    if (action === "increase") setQuantity(quantity + 1);
    if (action === "decrease" && quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className={styles.cartItem} key={props.item.id}>
      {/* <TotalAmount
        action={action}
        quantity={quantity}
        setQuantity={setQuantity}
      /> */}
      <h6 className={styles.itemName}>
        {props.item.product}
        {props.item.type} {props.item.system}
      </h6>

      <img className={styles.itemImg} src={props.item.image} />
      <div className={styles.qtySection}>
        <RemoveItem
          ids={props.ids}
          item={props.item}
          totalAmount={props.totalAmount}
          setTotalAmount={props.setTotalAmount}
          quantity={quantity}
        />
        <h4 ref={increaseRef}>
          {Math.ceil(props.item.price * props.exchanger * quantity)} {currency}
        </h4>
        <button
          onClick={() => {
            if (quantity > 1) {
              setAction("decrease");
              manipulateQty("decrease");
            }
          }}
          className={styles.decrease}
        >
          {">"}
        </button>
        <p className={styles.currentQty}>{quantity}</p>
        <button
          onClick={() => {
            setAction("increase");
            manipulateQty("increase");
          }}
          className={styles.increase}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
