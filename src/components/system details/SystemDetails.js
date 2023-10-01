import { useEffect, useState } from "react";
import LinkToContact from "../Link to contact/LinkToContact";
import Overlay from "../overlay/Overlay";
import styles from "./SystemDetails.module.css";
import { useSelector } from "react-redux";

function SystemDetails(props) {
  const [overlayDisplay, setOverlayDisplay] = useState("hidden");
  const [exchanger, setExchanger] = useState();
  const currency = useSelector((state) => state.currency);

  useEffect(() => {
    props.itemId !== ""
      ? setOverlayDisplay("visible")
      : setOverlayDisplay("hidden");

    currency === "$" ? setExchanger(0.54) : setExchanger(0.51);
  }, [props, currency]);
  return (
    <Overlay
      overlayDisplay={overlayDisplay}
      setOverlayDisplay={setOverlayDisplay}
      setItemId={props.setItemId}
    >
      {props.systems.length > 0
        ? props.systems.map((system) => {
            if (system.id === props.itemId)
              return (
                <div key={system.id} className={styles.systemDetails}>
                  <div className={styles.leftSide}>
                    <h1>
                      {system.type} <span>{system.system}</span>
                    </h1>
                    <img className={styles.sysImg} src={system.image} />
                  </div>
                  <div className={styles.rightSide}>
                    <p>{system.description}</p>
                    <div className={styles.price}>
                      {" "}
                      {system.price * exchanger} {currency}
                    </div>
                    <LinkToContact
                      setOverlayDisplay={setOverlayDisplay}
                      item={system.id}
                      setItemId={props.setItemId}
                    />
                  </div>
                </div>
              );
          })
        : ""}
    </Overlay>
  );
}

export default SystemDetails;
