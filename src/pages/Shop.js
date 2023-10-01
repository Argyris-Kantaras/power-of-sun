import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import ItemDetails from "../components/item details/ItemDetails";
import Products from "../components/products/Products";
import Footer from "../components/footer/Footer";

function Shop(props) {
  const [itemId, setItemId] = useState("");
  const [header, setHeader] = useState("block");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.onscroll = () => {
      window.scrollY !== 0 ? setHeader("sticky") : setHeader("block");
    };

    fetch(
      "https://power-of-sun-default-rtdb.europe-west1.firebasedatabase.app/products.json",
      {
        method: "Get",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const products = [];

        for (const key in data) {
          products.push({
            key: key,
            warranty: data[key].Warranty ? data[key].Warranty : null,
            ratedCurrent: data[key].RatedCurrent
              ? data[key].RatedCurrent
              : null,
            ratedVoltage: data[key].RatedVoltage
              ? data[key].RatedVoltage
              : null,
            id: data[key].id,
            image: data[key].image,
            price: data[key].price,
            product: data[key].product,
            model: data[key].model ? data[key].model : null,
            size: data[key].size ? data[key].size : null,
            description: data[key].description ? data[key].description : null,
            dod: data[key].DOD ? data[key].DOD : null,
            numberOfCycles: data[key].NumberOfCycles
              ? data[key].NumberOfCycles
              : null,
            weight: data[key].Weight ? data[key].Weight : null,
            output: data[key].Output ? data[key].Output : null,
            power: data[key].Power ? data[key].Power : null,
            supply: data[key].supply ? data[key].supply : null,
          });
        }
        setProducts(products);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "rgb(0, 0, 36)" }}>
      <Header setShowItems={props.setShowItems} position={header} />
      <Products
        products={products}
        item={props.showItems}
        setItemId={setItemId}
      />
      <ItemDetails products={products} itemId={itemId} setItemId={setItemId} />
      <Footer />
    </div>
  );
}

export default Shop;
