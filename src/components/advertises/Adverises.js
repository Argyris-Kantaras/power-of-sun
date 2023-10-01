import styles from "./Advertises.module.css";
import solarImg from "../../images/Conventional-solar-panel.jpg";
import homeAlone from "../../images/home-alone.jpg";
import inverter from "../../images/inverter.png";
import microInverter from "../../images/micro inverter.jpg";
import lithiumBatt from "../../images/lithium battery.png";
import solarPanelBack from "../../images/solar-panels.jpg";
import backgroundImg from "../../images/sunflowers-and-sun.jpg";
import backgroundImg2 from "../../images/field-solars.jpg";
import LinkToProducts from "../link to all products/LinkToProducts";

function Advertises() {
  return (
    <div>
      {/**/}

      <div
        style={{ backgroundImage: `url(${solarPanelBack})` }}
        className={styles.fullBackgroundImg}
      >
        <img alt="" src={solarImg} />
        <div>
          <h1>Amazing solar panels!</h1>
          <LinkToProducts link="/products" />
        </div>
      </div>
      <div className={styles.whiteBackground}>
        <div>
          <h1>Supply for all house!!</h1>
          <LinkToProducts link="/systems" />
        </div>
        <img alt="" src={homeAlone} />
      </div>
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className={styles.fullBackgroundImg}
      >
        <img alt="" src={inverter} />
        <div>
          <h1>Great and reliable inverters</h1>
          <LinkToProducts link="/products" />
        </div>
      </div>
      <div className={styles.lithiumBatt}>
        <div>
          <h1>Strong lithium batteries</h1>
          <LinkToProducts link="/products" />
        </div>
        <img className={styles.lithiumBatt} alt="" src={lithiumBatt} />
      </div>
      <div
        style={{ backgroundImage: `url(${backgroundImg2})` }}
        className={styles.fullBackgroundImg}
      >
        <img alt="" src={microInverter} />
        <div>
          <h1>Also micro inverters...</h1>
          <LinkToProducts link="/systems" />
        </div>
      </div>
    </div>
  );
}

export default Advertises;
