import "../stylesheets/App.scss";
// import Header from './Header';

function App() {
  return (
    <div className="App">
      <section className="header">
        <div>
          <div className="header__logo">

            <img className="header__logo--img" src="./assets/images/logo.png" alt="Awesome profile-cards logo" />

          </div>
        </div>
      </section>
      <section className="divided">
        <div className="divided__paquita">
          <section className="preview">
            <button className="reset js-reset"> <i className="fa fa-trash-alt" aria-hidden="true" alt="trash-can"></i> Reset</button>
            <section className="page js-card">
              <div className="container ">
                <div className="container__main-texts ">
                  <h2 className="container__main-texts--title jsnamepreview">Paquita Salas</h2>
                  <h3 className="container__main-texts--subtitle jsjobpreview">CEO PS Management</h3>
                </div>
              </div>
              <div className="Page__container">
                <div className="page__container--photo js-previewPhoto js-previewPhotoReset "></div>
              </div>
              <section className="page__icons">
                <div className="page__icons--icon icon-phone">
                  <a href="" className="link-icon jsphonelink" target="_blank">
                    <i className="fas fa-mobile-alt link" aria-hidden="true" alt="icon-phone"></i>
                  </a>
                </div>
                <div className="page__icons--icon icon-mail ">
                  <a href="" className="link-icon jsmaillink">
                    <i className="far fa-envelope link" aria-hidden="true" alt="icon-mail"></i>
                  </a>
                </div>
                <div className="page__icons--icon icon-linkedin">
                  <a href="" className="link-icon jslinkedinlink" target="_blank">
                    <i className="fab fa-linkedin-in link" aria-hidden="true" alt="icon-linkedin"></i>
                  </a>
                </div>

                <div className="page__icons--icon icon-github">
                  <span className="page__icons--circle"></span>
                  <a href="" className="link-icon jsgithublink" target="_blank">
                    <i className="fab fa-github-alt link" aria-hidden="true" alt="icon-github"></i>


                  </a>
                </div>
              </section>
            </section>
          </section>
        </div>
        <div className="centralcolumn divided__options">
          <section className="design">
            <div className="dropdown js-dropdown-header ">
              <div className="dropdown__title">
                <span className="dropdown__icon dropdown__icon--left far fa-object-ungroup"></span>
                <h2 className="dropdown__text">Diseña</h2>
              </div>
              <i className="fa fa-chevron-down js-arrow dropdown__arrow"></i>
            </div>
            <div className="colorcontainer hidden dropdowncontainer">
              <h3 className="colorcontainer__title">Colores</h3>
              <div className="colorcontainer__colors">
                <label className="colorcontainer__Label">
                  <input className="colorcontainer__option js-input1 js-palette" type="radio" name="palette" checked="" value="1" />
                  <ul className="colorcontainer__palette palette-1">
                    <li className="colorcontainer__square colorcontainer__square--color1-1"></li>
                    <li className="colorcontainer__square colorcontainer__square--color1-2"></li>
                    <li className="colorcontainer__square colorcontainer__square--color1-3"></li>
                  </ul>
                </label>

                <label className="colorcontainer__Label">
                  <input className="colorcontainer__option js-palette" type="radio" name="palette" value="2" />
                  <ul className="colorcontainer__palette palette-2">
                    <li className="colorcontainer__square colorcontainer__square--color2-1"></li>
                    <li className="colorcontainer__square colorcontainer__square--color2-2"></li>
                    <li className="colorcontainer__square colorcontainer__square--color2-3"></li>
                  </ul>
                </label>

                <label className="colorcontainer__Label">
                  <input className="colorcontainer__option js-palette" type="radio" name="palette" value="3" />
                  <ul className="colorcontainer__palette palette-3">
                    <li className="colorcontainer__square colorcontainer__square--color3-1"></li>
                    <li className="colorcontainer__square colorcontainer__square--color3-2"></li>
                    <li className="colorcontainer__square colorcontainer__square--color3-3"></li>
                  </ul>
                </label>
                <label className="colorcontainer__Label">
                  <input className="colorcontainer__option js-palette" type="radio" name="palette" value="4" />
                  <ul className="colorcontainer__palette palette-4">
                    <li className="colorcontainer__square colorcontainer__square--color4-1"></li>
                    <li className="colorcontainer__square colorcontainer__square--color4-2"></li>
                    <li className="colorcontainer__square colorcontainer__square--color4-3"></li>
                  </ul>
                </label>
              </div>
            </div>
          </section>

          <section className="fill">
            <div className="line-dividing--fill"></div>
            <div className="dropdown js-dropdown-header ">
              <div className="dropdown__title">
                <span className="dropdown__icon dropdown__icon--left far fa-keyboard dropdown__icon "></span>
                <h2 className="dropdown__text">Rellena</h2>
              </div>
              <i className="fa fa-chevron-down js-arrow dropdown__arrow"></i>
            </div>
            <div className="collapsable__content hidden dropdownfillcontainer dropdowncontainer">
              <form className="form__container jsform">
                <div className="fill__container">
                  <label className="form__label" for="name">Nombre completo</label>
                  <input className="form__input jsname" placeholder="Ej: Paquita Salas" id="name" type="text" name="name" value="" />
                </div>
                <div className="fill__container">
                  <label className="form__label" for="job">Puesto</label>
                  <input placeholder="Ej: CEO PS management" className="form__input jsjob" id="job" type="text" name="job" value="" />
                </div>
                <div className="fill__container">
                  <label className="form__label" for="photo">Imagen de perfil</label>
                  <div className="image-form__container">
                    <div className="button">
                      <label className="button__form js-buttonForm" for="photo">Añadir imagen</label>
                    </div>
                    <input className="form__input button-image js-inputPhoto" type="file" value="" id="photo" />
                    <div className="small-image__container smallphoto js-smallPhoto"></div>
                  </div>
                </div>
                <div className="fill__container">
                  <label className="form__label" for="email">Email</label>
                  <input placeholder="Ej: nombre.apellidos@email.com" className="form__input jsmail" id="email" type="email" name="email" value="" />
                </div>
                <div className="fill__container">
                  <label className="form__label" for="phone">Teléfono</label>
                  <input placeholder="Ej: 555-452-369 " className="form__input jsphone" id="phone" type="tel" name="phone" value="" />
                </div>
                <div className="fill__container">
                  <label className="form__label" for="linkedin">Linkedin</label>
                  <input placeholder="Ej: linkedin.com/in/paquita.salas" className="form__input jslinkedin" id="linkedin" type="" name="linkedin" value="" />
                </div>
                <div className="fill__container">
                  <label className="form__label" for="github">Github</label>
                  <input placeholder="Ej: @paquita-salas" className="form__input jsgithub" id="github" type="" name="github" value="" />
                </div>
              </form>
            </div>
            <div className="line-dividing--fill"></div>
          </section>
          <section className="share">
            <div className="dropdown js-dropdown-header dropdownshare-btn">
              <div className="dropdown__title">
                <span className="dropdown__icon dropdown__icon--left fas fa-share-alt"></span>
                <h2 className="dropdown__text">Comparte</h2>
              </div>
              <i className="fa fa-chevron-down js-arrow dropdown__arrow"></i>
            </div>
            <div className="share-button hidden dropdownsharecontainer dropdowncontainer">
              <button className="share-button__create-card jssharebtn">
                <i className="far fa-address-card share__create card"></i> Crear tarjeta
            </button>
              <div className="share__hidden jssharelinks">
                <p className="share-text jsShareText"></p>
                <a href="" className="jsUrl urlcard" target="_blank"></a>
                <div className="share-button-twitter--container">
                  <button className="twitterhidden share-button--twitter jstwitterbutton">
                    <a href="" className="jsTwitter twitterlink" target="_blank"> Compartir en twitter</a>
                    <i className="fab fa-twitter"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="line-dividing"></div>
          </section>
        </div>
      </section>
      <footer className="footer">
        <div className="footer__container">
          <small className="copyright"> PS Management profile-card © 2021 </small>
          <a className="logo__container" href="https://adalab.es/" target="_blank" title="Adalab Home">
            <img className="logo" src="./assets/images/logo-adalab.png" alt="logo adalab" title="logo adalab" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
