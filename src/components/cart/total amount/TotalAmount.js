import { useEffect } from "react";
import { useSelector } from "react-redux";

function TotalAmount(props) {
  const addedProducts = useSelector((state) => state.addedProducts);

  useEffect(() => {
    if (props.totalAmount === 0) props.setTotalAmount(props.item.price);
    if (props.totalAmount > 1 && props.action === "") {
      props.setTotalAmount(props.totalAmount + props.item.price);
    }
    if (props.action === "increase") {
      if (addedProducts.length > 1) {
        props.setTotalAmount(props.totalAmount + props.item.price);
      } else {
        props.setTotalAmount(props.item.price * props.quantity);
      }
    }

    if (props.action === "decrease") {
      if (addedProducts.length > 1 && props.quantity > 1) {
        props.setTotalAmount(props.totalAmount - props.item.price);
      } else {
        props.setTotalAmount(props.item.price * props.quantity);
      }
    }
  }, [props, addedProducts]);

  const manipulateQty = (action) => {
    if (action === "increase") props.setQuantity(props.quantity + 1);
    if (action === "decrease" && props.quantity > 1)
      props.setQuantity(props.quantity - 1);
  };

  return null;
}

export default TotalAmount;
