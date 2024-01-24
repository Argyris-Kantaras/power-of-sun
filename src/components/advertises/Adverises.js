import styles from "./Advertises.module.css";
import hands from "../../images/logo2.jpg";
import homeAlone from "../../images/home-alone.jpg";
import solarPanelBack from "../../images/solar-panels.jpg";
import backgroundImg from "../../images/sunflowers-and-sun.jpg";
import backgroundImg2 from "../../images/field-solars.jpg";
import installationImg from "../../images/install.jpg";
import homeImg from "../../images/solar_panels_sun_header.jpg";
import Technicians from "../Technicians/Technicians";
import Suggestions from "../suggestions/Suggestions";
import ChooseUs from "../Choose us/ChooseUs";
import GetQuote from "../get quote/GetQuote";

function Advertises() {
  return (
    <div>
      <img alt="" className={styles.homeImg} src={homeImg} />
      <div className={styles.topWord}>
        <h1>Solar Power</h1>
        <p>WHY WASTE IT ???</p>
      </div>
      <div className={styles.companyPluses}>
        <div>
          <img className={styles.img} alt="" src={installationImg} />
          <h3 className={styles.title}>Easy Installation</h3>
        </div>
        <div>
          <img className={styles.img} alt="" src={solarPanelBack} />
          <h3 className={styles.title}>Great Material</h3>
        </div>
        <div>
          <img className={styles.img} alt="" src={backgroundImg2} />
          <h3 className={styles.title}>Install Anywhere</h3>
        </div>
        <div>
          <img className={styles.img} alt="" src={backgroundImg} />
          <h3 className={styles.title}>Protect Your Area</h3>
        </div>
        <div>
          <img className={styles.img} alt="" src={homeAlone} />
          <h3 className={styles.title}>Full Supply</h3>
        </div>
        <div>
          <img className={styles.img} alt="" src={hands} />
          <h3 className={styles.title}>Reduce Global Warm</h3>
        </div>
      </div>
      <Suggestions />
      <Technicians />
      <ChooseUs />
      <GetQuote />
    </div>
  );
}

export default Advertises;
