import { useEffect, useState } from "react";
import Advertises from "../components/advertises/Adverises";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function Home(props) {
  const [header, setHeader] = useState("block");
  useEffect(() => {
    window.onscroll = () => {
      window.scrollY !== 0 ? setHeader("sticky") : setHeader("block");
    };
  }, []);
  return (
    // style={{ backgroundColor: "rgb(0, 0, 36)" }}
    <div>
      <div>
        <Header setShowItems={props.setShowItems} />
        <Advertises setShowItems={props.setShowItems} />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
