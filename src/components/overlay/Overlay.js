import styles from "./Overlay.module.css";

function Overlay(props) {
  return (
    <div
      style={
        props.overlayDisplay === "hidden"
          ? { transition: "0.4s", transform: "translateY(-100%)" }
          : { transition: "0.4s", transform: "translateY(0%)" }
      }
      onClick={(e) =>
        e.target.className === "Overlay_overlay__r5dtc"
          ? props.setOverlayDisplay("hidden") + props.setItemId
            ? props.setItemId("")
            : null
          : null
      }
      className={styles.overlay}
    >
      <div
        onClick={() => {
          if (props.setItemId) props.setItemId("");
          props.setOverlayDisplay("hidden");
        }}
        className={styles.Xbtn}
      >
        X
      </div>
      {props.children}
    </div>
  );
}

export default Overlay;
