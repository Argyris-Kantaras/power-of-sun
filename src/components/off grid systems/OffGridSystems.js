import offGridImg from "../../images/Off-Grid-System-Hero-plus.jpg";
import CompleteSystems from "../complete systems comp/CompleteSystems";

function OffGridSystems(props) {
  return (
    <CompleteSystems
      systems={props.systems}
      img={offGridImg}
      showProducts={props.showProducts}
      setShowProducts={props.setShowProducts}
      type={"off-grid"}
      title="Off-Grid Solar Systems"
      setItemId={props.setItemId}
      setOverlayDisplay={props.setOverlayDisplay}
    />
  );
}

export default OffGridSystems;
