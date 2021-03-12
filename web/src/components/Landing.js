import "./App.scss";
import "./Landing.scss";
import logoHeader from "../images/logo.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Landing() {
  return (
    <div className="body-index">
      <main className="main">
        <div className="main__logo">
          <img
            className="main__logo--img"
            src={logoHeader}
            alt="Logo PS-Management"
            title="Logo PS-Management"
          />
        </div>
        <div className="main__text">
          <h1 className="main__text--title">Crea tu tarjeta de visita</h1>
          <p className="main__text--subtitle">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
        </div>
        <div className="main__articles">
          <article className="main__articles--design">
            <i className="far fa-object-ungroup fardesign main__articles--icon"></i>
            <p className="main__articles--text">Diseña</p>
          </article>
          <article className="main__articles--fill">
            <i className="far fa-keyboard fardesign main__articles--icon"></i>
            <p className="main__articles--text">Rellena</p>
          </article>
          <article className="main__articles--share">
            <i className="fas fa-share-alt fardesign1 main__articles--icon"></i>
            <p className="main__articles--text">Comparte</p>
          </article>
        </div>
        <div className="main__btn js-startbtn">
          <Link
            to="/CardGenerator"
            className="main__btn--link"
            href="./principal.html"
            title="Go to profile card design"
          >
            Comenzar
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
