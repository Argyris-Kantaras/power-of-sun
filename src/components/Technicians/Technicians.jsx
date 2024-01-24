import styles from "./Technicians.module.css";
import solarInstall from "../../images/solar-for-home.jpg";
import soilInstall from "../../images/background.jpg";
import inverterInstall from "../../images/inverter-install.jpg";

function Technicians() {
  return (
    <div className={styles.techicalSection}>
      <div className={styles.title}>
        <h1>We cover all the installation</h1>
        <p>
          Having some of the most experienced people in the industry.
          Technicians that will take care installation from A-Z. All you have to
          do is trust us!
        </p>
      </div>
      <div>
        <img className={styles.img} alt="" src={solarInstall} />
        <img className={styles.img} alt="" src={soilInstall} />
        <img className={styles.img} alt="" src={inverterInstall} />
      </div>
    </div>
  );
}

export default Technicians;
