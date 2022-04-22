import styles from "./Footer.module.css";
import NavbarList from "../Navbar_List/Navbar_List";
function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <h1 className={styles.footer__brand}>Covid Indonesia</h1>
          <p className={styles.footer__author}>Diny Brilianti</p>
        </div>
        <NavbarList />
      </footer>
    </div>
  );
}

export default Footer;
