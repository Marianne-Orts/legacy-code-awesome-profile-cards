import "./App.scss";
import "./Landing.scss";
import logoHeader from "../images/logo.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Landing() {
  return (
    <div class="body-index">
      <main class="main">
        <div class="main__logo">
          <img
            class="main__logo--img"
            src={logoHeader}
            alt="Logo PS-Management"
            title="Logo PS-Management"
          />
        </div>
        <div class="main__text">
          <h1 class="main__text--title">Crea tu tarjeta de visita</h1>
          <p class="main__text--subtitle">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
        </div>
        <div class="main__articles">
          <article class="main__articles--design">
            <i class="far fa-object-ungroup main__articles--icon"></i>
            <p class="main__articles--text">Diseña</p>
          </article>
          <article class="main__articles--fill">
            <i class="far fa-keyboard main__articles--icon"></i>
            <p class="main__articles--text">Rellena</p>
          </article>
          <article class="main__articles--share">
            <i class="fas fa-share-alt main__articles--icon"></i>
            <p class="main__articles--text">Comparte</p>
          </article>
        </div>
        <div class="main__btn js-startbtn">
          <Link
            class="main__btn--link"
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
