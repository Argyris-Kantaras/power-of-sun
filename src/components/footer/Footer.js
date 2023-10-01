import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.aboutUs}>About us</div>
        <p className={styles.aboutUsPar}>
          We are a small but powerful company. Our goal is to do an excellent
          job and to keep our clients happy.We have the best and qualified
          technicians that will take care of the installation and also the
          testing process!
        </p>
      </div>
      <div className={styles.sectionContacts}>Contact info</div>
      <ul>
        <li>
          <span>Email: </span>{" "}
          <Link to="mailto:anargyros.kantaras@gmail.com">Power-of-sun</Link>
        </li>
        <li>
          <span>Mob.number:</span> +359 877761863
        </li>
        <li></li>
      </ul>
    </footer>
  );
}

export default Footer;
