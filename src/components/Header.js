import logoHeader from "../images/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <section className="header">
      <div>
        <div className="header__logo">
          <Link to="/">
            <img
              className="header__logo--img"
              src={logoHeader}
              alt="Awesome profile-cards logo"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Header;
