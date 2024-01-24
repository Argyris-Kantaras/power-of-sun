import styles from "./ChooseUs.module.css";
import thumbsUp from "../../images/thumb-up.png";
import home from "../../images/home.png";
import arm from "../../images/arm.png";
import bulb from "../../images/bulb.png";
import meter from "../../images/meter.png";

function ChooseUs() {
  return (
    <div className={styles.chooseUs}>
      <div className={styles.leftSection}>
        <h1>WHY CHOOSE US</h1>
        <img className={styles.thumbsUp} alt="" src={thumbsUp} />
      </div>
      <div className={styles.reasons}>
        <div className={styles.details}>
          <img className={styles.icon} alt="" src={bulb} />
          <div className={styles.moreDetails}>
            <h3>COST</h3>
            <p>
              By going in for solar power, you will cut your cost of electricity
              at your place. Our attractives prices will not pass unnoticed!
            </p>
          </div>
        </div>
        <div className={styles.details}>
          <img className={styles.icon} alt="" src={arm} />
          <div className={styles.moreDetails}>
            <h3>STRONG MATERIAL</h3>
            <p>
              We have the ability to combine good prices with very strong
              materials.
            </p>
          </div>
        </div>
        <div className={styles.details}>
          <img className={styles.icon} alt="" src={meter} />
          <div className={styles.moreDetails}>
            <h3>ECO FRIENDLY</h3>
            <p>We are helping to reduce emissions and global warming!</p>
          </div>
        </div>
        <div className={styles.details}>
          <img className={styles.icon} alt="" src={home} />
          <div className={styles.moreDetails}>
            <h3>PAY AS YOU GO</h3>
            <p>
              There is no upfront cost for the hardware. Make payments as you go
              to avoid huge payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChooseUs;
