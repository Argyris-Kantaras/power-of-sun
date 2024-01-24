import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import SystemsPage from "./pages/SystemsPage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Cart from "./components/cart/Cart";

function App() {
  const dispatch = useDispatch();

  return (
    <div
      onClick={(e) => {
        // e.target.className === "Cart_cart__kJhX2" ||
        // e.target.className === "Header_cartImg__GYJLj" ||
        // e.target.className === "CartProduct_cartItem__oLLDo" ||
        // e.target.className === "CartProduct_itemName__aCXNX" ||
        // e.target.className === "CartProduct_increase__cB0uU" ||
        // e.target.className === "CartProduct_decrease__x1dCX" ||
        // e.target.className === "CartProduct_itemImg__MPpAd" ||
        // e.target.className === "CartProduct_qtySection__yi8zd" ||
        // e.target.className === "Cart_totalAmount__kT86S" ||
        // e.target.className === "Cart_actualTotalAmount__Gn+Ey" ||
        // e.target.className === "RemoveItem_removeBtn__RO15b" ||
        // e.target.className === "Currency_currency__n+Zrr" ||
        e.target.className === "Cart_cart__kUtiw" ||
        e.target.className === "Header_cartImg__x2W+t" ||
        e.target.className === "CartProduct_cartItem__1vtEG" ||
        e.target.className === "CartProduct_itemName__nSoqP" ||
        e.target.className === "CartProduct_increase__r4Kps" ||
        e.target.className === "CartProduct_decrease__AE7M-" ||
        e.target.className === "CartProduct_itemImg__qBOFB" ||
        e.target.className === "CartProduct_qtySection__mllcV" ||
        e.target.className === "Cart_totalAmount__N7Ymz" ||
        e.target.className === "Cart_actualTotalAmount__qSstF" ||
        e.target.className === "RemoveItem_removeBtn__GZMPv" ||
        e.target.className === "Currency_currency__vipqs" ||
        e.target.tagName === "H4" ||
        e.target.tagName === "H6" ||
        e.target.tagName === "H5"
          ? dispatch({ type: "showCart", showCart: true })
          : dispatch({ type: "showCart", showCart: false });
      }}
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Shop />}></Route>
        <Route path="/systems" element={<SystemsPage />}></Route>
        <Route path="/contact/:id" element={<Contact />}></Route>
      </Routes>
      <Cart />
    </div>
  );
}

export default App;
