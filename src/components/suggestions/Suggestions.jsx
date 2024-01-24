import styles from "./Suggestions.module.css";
import whiteStar from "../../images/white-star-1.png";
import money from "../../images/money-1.png";
import clients from "../../images/clients-1.png";
import handShake from "../../images/hand-shake.jpg";

function Suggestions() {
  return (
    <div className={styles.decisionSection}>
      <img className={styles.handShake} alt="" src={handShake} />
      <div>
        <div className={styles.topDecisionsPart}>
          <h2>BEST DECISION YOU EVER MADE!</h2>
          <p>Don't think of it, just go for a solar system today.</p>
          <p>
            Typically our solar panels can last for a very long 30 years,
            contributing so much less of global warming. You will save some
            serious amount of costs.
          </p>
        </div>
        <div className={styles.suggestions}>
          <div
            style={{ borderRight: "1px yellow dotted " }}
            className={styles.coverDiv}
          >
            <div className={styles.imgContainer}>
              <img className={styles.icons} alt="" src={clients} />
              <h1>200+</h1>
              <h3>Happy Clients</h3>
            </div>
          </div>
          <div className={styles.coverDiv}>
            <div className={styles.imgContainer}>
              <img className={styles.icons} alt="" src={money} />
              <h1>Significant</h1>
              <h3>Savings / Month</h3>
            </div>
          </div>
          <div
            style={{ borderLeft: "1px yellow dotted " }}
            className={styles.coverDiv}
          >
            <div className={styles.imgContainer}>
              <img className={styles.icons} alt="" src={whiteStar} />
              <h1>4.5</h1>
              <h3>Average Rating</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
