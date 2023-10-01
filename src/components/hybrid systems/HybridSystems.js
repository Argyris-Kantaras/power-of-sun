import CompleteSystems from "../complete systems comp/CompleteSystems";
import solarImg from "../../images/solar img.webp";

function HybridSystems(props) {
  return (
    <CompleteSystems
      systems={props.systems}
      img={solarImg}
      showProducts={props.showProducts}
      setShowProducts={props.setShowProducts}
      type={"hybrid"}
      title="Hybrid Solar Systems"
      setItemId={props.setItemId}
      setOverlayDisplay={props.setOverlayDisplay}
    />
  );
}

export default HybridSystems;
