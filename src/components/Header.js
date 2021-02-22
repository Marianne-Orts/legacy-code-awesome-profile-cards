import logoHeader from "../images/logo.png";
import "./Header.scss";

function Header() {
  return (
    <section className="header">
      <div>
        <div className="header__logo">
          <img
            className="header__logo--img"
            src={logoHeader}
            alt="Awesome profile-cards logo"
          />
        </div>
      </div>
    </section>
  );
}
export default Header;
