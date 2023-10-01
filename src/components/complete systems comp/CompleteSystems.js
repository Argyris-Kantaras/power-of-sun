import styles from "./CompleteSystems.module.css";
import Overlay from "../overlay/Overlay";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function CompleteSystems(props) {
  const [exchanger, setExchanger] = useState();
  const currency = useSelector((state) => state.currency);

  useEffect(() => {
    currency === "$" ? setExchanger(0.54) : setExchanger(0.51);
  }, [currency]);

  return (
    <div className={styles.systemsContainer}>
      <div
        onClick={() => {
          props.setShowProducts("visible");
        }}
        style={{ cursor: "pointer" }}
      >
        <h3>{props.title}</h3>
        <img className={styles.mainImg} src={props.img} />
      </div>
      <Overlay
        setOverlayDisplay={props.setShowProducts}
        overlayDisplay={props.showProducts}
      >
        <div
          style={
            props.showProducts === "visible"
              ? { display: "block" }
              : { display: "none" }
          }
          className={styles.solarSys}
        >
          <div>
            <div>
              {props.systems.length > 0
                ? props.systems.map((system) => {
                    if (system.id.includes(props.type))
                      return (
                        <div
                          key={system.id}
                          onClick={() => {
                            props.setItemId(system.id);
                            props.setOverlayDisplay("visible");
                          }}
                          className={styles.allSystem}
                        >
                          <h2>
                            {system.type} {system.system}
                          </h2>
                          <img className={styles.img} src={system.image} />
                          <p>
                            {system.price * exchanger} {currency}
                          </p>
                        </div>
                      );
                  })
                : ""}
            </div>
          </div>
        </div>
      </Overlay>
    </div>
  );
}

export default CompleteSystems;
