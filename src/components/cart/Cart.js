import { useEffect, useRef, useState } from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../cart product/CartProduct";
import EmptyCart from "../empty cart/EmptyCart";
import OrderNowButton from "../order button/OrderNowButton";

const products = [];
const ids = [];

function Cart() {
  const addedIds = useSelector((state) => state.products);
  const showCart = useSelector((state) => state.cart);
  const currency = useSelector((state) => state.currency);
  const addedProducts = useSelector((state) => state.addedProducts);

  const [exchanger, setExchanger] = useState();
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

  const urls = [
    "https://power-of-sun-default-rtdb.europe-west1.firebasedatabase.app/products.json",
    "https://power-of-sun-default-rtdb.europe-west1.firebasedatabase.app/systems.json",
  ];

  const productsObj = function (data, key) {
    const obj = {
      key: key,
      ratedCurrent: data[key].RatedCurrent ? data[key].RatedCurrent : null,
      id: data[key].id,
      image: data[key].image,
      price: data[key].price,
      product: data[key].product,
      model: data[key].model ? data[key].model : null,
    };
    return obj;
  };
  const systemsObj = function (data, key) {
    const obj = {
      key: key,
      description: data[key].description ? data[key].description : null,
      id: data[key].id,
      image: data[key].image,
      price: data[key].price,
      system: data[key].system,
      type: data[key].type,
    };
    return obj;
  };

  const addProductsToCartHandler = (url, objCreateHandler) => {
    fetch(url, {
      method: "Get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        for (const key in data) {
          if (data[key].id === addedIds) {
            ids.push(data[key].id);
            products.push(objCreateHandler(data, key));
            dispatch({
              type: "addIds",
              addedIds: ids,
            });
          }
        }

        dispatch({
          type: "addItems",
          addedToCart: addedProducts.length,
        });
        dispatch({
          type: "addProducts",
          addedProducts: products,
        });
      });
  };

  useEffect(() => {
    currency === "$" ? setExchanger(0.54) : setExchanger(0.51);

    if (ids.includes(addedIds)) {
      return;
    } else {
      addProductsToCartHandler(urls[0], productsObj);
      addProductsToCartHandler(urls[1], systemsObj);
    }
  }, [currency, addedIds, addedProducts]);
  return (
    <div
      style={
        showCart === true
          ? { transform: "translateY(0%)" }
          : { transform: "translateY(-100%)" }
      }
      className={styles.cartAbsolute}
    >
      {/* <AddItemsToCart ids={ids} products={products} /> */}
      <div className={styles.cart}>
        {addedProducts.length > 0 ? (
          addedProducts.map((item, i) => {
            return (
              <CartProduct
                setTotalAmount={setTotalAmount}
                totalAmount={totalAmount}
                key={item.id}
                item={item}
                exchanger={exchanger}
                ids={ids}
              />
            );
          })
        ) : (
          <EmptyCart />
        )}
        <div
          style={
            addedProducts.length > 0
              ? { display: "block" }
              : { display: "none" }
          }
          className={styles.totalAmount}
        >
          <h5>Total Amount</h5>
          <div className={styles.actualTotalAmount}>
            {Math.ceil(totalAmount * exchanger)} {currency}
          </div>
        </div>
        {/* {Add the order button} */}
        <OrderNowButton ids={ids} />
      </div>
    </div>
  );
}

export default Cart;
