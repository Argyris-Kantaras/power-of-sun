import { useDispatch, useSelector } from "react-redux";

function AddItemsToCart(props) {
  const dispatch = useDispatch();
  const addedIds = useSelector((state) => state.products);
  const addedProducts = useSelector((state) => state.addedProducts);

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
            props.ids.push(data[key].id);
            props.products.push(objCreateHandler(data, key));
          }
        }

        dispatch({
          type: "addItems",
          addedToCart: addedProducts.length,
        });
        dispatch({
          type: "addProducts",
          addedProducts: props.products,
        });
      });
  };
  return null;
}

export default AddItemsToCart;
