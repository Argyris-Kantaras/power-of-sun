import { useEffect, useState } from "react";
import styles from "./RemoveItem.module.css";
import { useDispatch, useSelector } from "react-redux";

let newRemoveProducts;
function RemoveItem(props) {
  const dispatch = useDispatch();

  const addedProducts = useSelector((state) => state.addedProducts);
  const addedToCart = useSelector((state) => state.addedToCart);
  const addedIds = useSelector((state) => state.addedIds);
  const [action, setAction] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    if (action) {
      dispatch({
        type: "add",
        itemId: id,
      });
    }
    setAction(false);
  }, [action]);
  const removeItemHandler = (id) => {
    addedProducts.map((item, i) => {
      if (id === item.id && i === 0) {
        props.ids.shift();
        addedProducts.shift();
        newRemoveProducts = addedProducts;
        setId(item.id + "1");
        props.setTotalAmount(props.totalAmount - item.price * props.quantity);
      }
      if (id === item.id && i > 0 && i === addedProducts.length - 1) {
        props.ids.pop();
        addedProducts.pop();
        newRemoveProducts = addedProducts;
        setId(item.id + "1");
        props.setTotalAmount(props.totalAmount - item.price * props.quantity);
      }
      if (id === item.id && i > 0 && i < addedProducts.length - 1) {
        props.ids.splice(i, i);
        addedProducts.splice(i, i);
        newRemoveProducts = addedProducts;
        setId(item.id + "1");
        props.setTotalAmount(props.totalAmount - item.price * props.quantity);
      }
      if (addedProducts.length < 1)
        dispatch({
          type: "addIds",
          addedIds: [],
        });
    });
    dispatch({
      type: "addItems",
      addedToCart: addedProducts.length,
    });
    dispatch({
      type: "addProducts",
      addedProducts: newRemoveProducts,
    });
    setAction(true);
  };

  return (
    <button
      onClick={() => removeItemHandler(props.item.id)}
      className={styles.removeBtn}
    >
      {"-"}
    </button>
  );
}

export default RemoveItem;
