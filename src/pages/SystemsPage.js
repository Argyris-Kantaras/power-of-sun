import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import OffGridSystems from "../components/off grid systems/OffGridSystems";
import HybridSystems from "../components/hybrid systems/HybridSystems";
import SystemDetails from "../components/system details/SystemDetails";
import Footer from "../components/footer/Footer";

function SystemsPage(props) {
  const [showOffGrid, setShowOffGrid] = useState("hidden");
  const [showHybrid, setShowHybrid] = useState("hidden");
  const [showOverlay, setShowOverlay] = useState("hidden");
  const [itemId, setItemId] = useState("");
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    fetch(
      "https://power-of-sun-default-rtdb.europe-west1.firebasedatabase.app/systems.json",
      {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const systems = [];

        for (const key in data) {
          systems.push({
            description: data[key].description,
            id: data[key].id,
            image: data[key].image,
            price: data[key].price,
            system: data[key].system,
            type: data[key].type,
          });
        }
        setSystems(systems);
      });
  }, []);

  return (
    <div>
      <Header setShowItems={props.setShowItems} />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <OffGridSystems
          systems={systems}
          showProducts={showOffGrid}
          setShowProducts={setShowOffGrid}
          setItemId={setItemId}
          setOverlayDisplay={setShowOverlay}
        />
        <HybridSystems
          systems={systems}
          showProducts={showHybrid}
          setShowProducts={setShowHybrid}
          setItemId={setItemId}
          setOverlayDisplay={setShowOverlay}
        />
        <SystemDetails
          systems={systems}
          overlayDisplay={showOverlay}
          setOverlayDisplay={setShowOverlay}
          itemId={itemId}
          setItemId={setItemId}
        />
      </div>
      <Footer />
    </div>
  );
}

export default SystemsPage;
