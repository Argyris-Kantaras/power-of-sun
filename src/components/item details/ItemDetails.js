import { useEffect, useState } from "react";
import Overlay from "../overlay/Overlay";
import styles from "./ItemDetails.module.css";
import LinkToContact from "../Link to contact/LinkToContact";
import { useSelector } from "react-redux";

function ItemDetails(props) {
  const [overlayDisplay, setOverlayDisplay] = useState("hidden");
  const [exchanger, setExchanger] = useState();
  const currency = useSelector((state) => state.currency);

  useEffect(() => {
    props.itemId !== ""
      ? setOverlayDisplay("visible")
      : setOverlayDisplay("hidden");

    setExchanger(currency === "$" ? 0.54 : 0.51);
  }, [props, currency]);

  return (
    <Overlay
      overlayDisplay={overlayDisplay}
      setOverlayDisplay={setOverlayDisplay}
      setItemId={props.setItemId}
    >
      {/*Displaying the products details*/}
      {props.products.length > 0
        ? props.products.map((product) => {
            console.log(product);
            if (product.id === props.itemId) {
              return (
                <div key={product.id}>
                  <div className={styles.itemDetails}>
                    <div className={styles.imgTitle}>
                      <h1>{product.product}</h1>
                      <img src={product.image} />
                    </div>
                    <div className={styles.details}>
                      <p>
                        {product.SolarCells
                          ? "Cells: " + product.SolarCells
                          : ""}
                      </p>
                      <h3>{product.model ? product.model : ""}</h3>
                      <p>{product.power ? "Power: " + product.power : ""}</p>
                      <p>{product.output ? "Output: " + product.output : ""}</p>
                      <p>{product.size ? "Size: " + product.size : ""}</p>
                      <p>
                        {" "}
                        {product.supply ? "Supply: " + product.supply : ""}
                      </p>
                      <p>
                        {" "}
                        {product.weight ? "Weight: " + product.weight : ""}
                      </p>
                      <p>{product.dod ? "DOD: " + product.dod : ""}</p>
                      <p>
                        {product.numberOfCycles
                          ? "Number of cycles: " + product.numberOfCycles
                          : ""}
                      </p>
                      <p>
                        {product.ratedCurrent
                          ? "Rated current: " + product.ratedCurrent
                          : ""}
                      </p>
                      <p>
                        {product.ratedVoltage
                          ? "Rated voltage: " + product.ratedVoltage
                          : ""}
                      </p>
                      <p>{product.description ? product.description : ""}</p>
                      <p>
                        {" "}
                        {product.warranty
                          ? "Warranty: " + product.warranty
                          : ""}
                      </p>
                      <p className={styles.price}>
                        {" "}
                        {product.price
                          ? Math.ceil(product.price * exchanger) + currency
                          : ""}
                      </p>
                      <LinkToContact
                        setOverlayDisplay={setOverlayDisplay}
                        item={product.id}
                        setItemId={props.setItemId}
                      />
                    </div>
                  </div>
                </div>
              );
            }
          })
        : ""}
    </Overlay>
  );
}

export default ItemDetails;
