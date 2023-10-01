import { useParams } from "react-router-dom";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const id = useParams();
  return (
    <form className={styles.contactForm}>
      <div className={styles.inputsContainer}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Tel. Number" />
        <input type="text" placeholder={id.id} />
        <textarea placeholder="More details about the order">
          {"I would like to order the above products:                             " +
            id.id}
        </textarea>
        <h1>We will get back to you as soon as possible!!!</h1>
        <div className={styles.sendEnquiryBtn}>Send Enquiry</div>
      </div>
    </form>
  );
}

export default ContactForm;
