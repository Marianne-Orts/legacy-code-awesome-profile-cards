function Inputs() {
  return (
    <div className="collapsable__content hidden dropdownfillcontainer dropdowncontainer">
      <form className="form__container jsform">
        <div className="fill__container">
          <label className="form__label" for="name">
            Nombre completo
          </label>
          <input
            className="form__input jsname"
            placeholder="Ej: Paquita Salas"
            id="name"
            type="text"
            name="name"
            value=""
          />
        </div>
        <div className="fill__container">
          <label className="form__label" for="job">
            Puesto
          </label>
          <input
            placeholder="Ej: CEO PS management"
            className="form__input jsjob"
            id="job"
            type="text"
            name="job"
            value=""
          />
        </div>
        {/* GET AVATAR  */}
        <div className="fill__container">
          <label className="form__label" for="email">
            Email
          </label>
          <input
            placeholder="Ej: nombre.apellidos@email.com"
            className="form__input jsmail"
            id="email"
            type="email"
            name="email"
            value=""
          />
        </div>
        <div className="fill__container">
          <label className="form__label" for="phone">
            Teléfono
          </label>
          <input
            placeholder="Ej: 555-452-369 "
            className="form__input jsphone"
            id="phone"
            type="tel"
            name="phone"
            value=""
          />
        </div>
        <div className="fill__container">
          <label className="form__label" for="linkedin">
            Linkedin
          </label>
          <input
            placeholder="Ej: linkedin.com/in/paquita.salas"
            className="form__input jslinkedin"
            id="linkedin"
            type=""
            name="linkedin"
            value=""
          />
        </div>
        <div className="fill__container">
          <label className="form__label" for="github">
            Github
          </label>
          <input
            placeholder="Ej: @paquita-salas"
            className="form__input jsgithub"
            id="github"
            type=""
            name="github"
            value=""
          />
        </div>
      </form>
    </div>
  );
}

export default Inputs;
