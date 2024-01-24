import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../images/main-logo.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.aboutUs}>
        <img className={styles.footerLogo} alt="" src={logo} />
        <span>Power Of Sun</span>
        <p className={styles.aboutUsPar}>
          We are a small but powerful company. Our goal is to do an excellent
          job and to keep our clients happy.We have the best and qualified
          technicians that will take care of the installation and also the
          testing process!
        </p>
      </div>
      <div>
        <h3 className={styles.sectionContacts}>Get in Touch</h3>
        <ul>
          <li>
            <span>Email: </span>{" "}
            <Link to="mailto:anargyros.kantaras@gmail.com">Power-of-sun</Link>
          </li>
          <li>
            <span>Mob.number:</span> +359 877761863
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
