import { useEffect, useState } from "react";
import Advertises from "../components/advertises/Adverises";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Slide from "../components/slides/Slide";

function Home(props) {
  const [header, setHeader] = useState("block");
  useEffect(() => {
    window.onscroll = () => {
      // console.log(window.scrollY);
      window.scrollY !== 0 ? setHeader("sticky") : setHeader("block");
    };
  }, []);
  return (
    <div style={{ backgroundColor: "rgb(0, 0, 36)" }}>
      <div>
        <Header setShowItems={props.setShowItems} position={header} />
        <Slide />
        <Advertises setShowItems={props.setShowItems} />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
