import styles from "./GetQuote.module.css";
import building from "../../images/building.jpg";

function GetQuote() {
  return (
    <div className={styles.quoteSection}>
      <img className={styles.img} alt="" src={building} />
      <form className={styles.quoteForm}>
        <input type="text" placeholder="Name" className={styles.quoteInput} />
        <input type="text" placeholder="Number" className={styles.quoteInput} />
        <input type="email" placeholder="email" className={styles.quoteInput} />
        <input
          type="date"
          placeholder="mm/dd/yyyy"
          className={styles.quoteInput}
        />
        <textarea className={styles.commentArea} placeholder="Comment" />
        <button className={styles.submitBtn}>Submit now</button>
      </form>
    </div>
  );
}
export default GetQuote;
