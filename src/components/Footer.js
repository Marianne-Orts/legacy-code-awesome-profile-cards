import logoFooter from "../images/logo-adalab.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <small className="copyright"> PS Management profile-card © 2021 </small>
        <a
          className="logo__container"
          href="https://adalab.es/"
          target="_blank"
          title="Adalab Home"
        >
          <img
            className="logo"
            src={logoFooter}
            alt="logo adalab"
            title="logo adalab"
          />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
