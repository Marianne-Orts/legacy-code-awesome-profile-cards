function GetAvatar() {
  return (
    <div className="fill__container">
      <label className="form__label" for="photo">
        Imagen de perfil
      </label>
      <div className="image-form__container">
        <div className="button">
          <label className="button__form js-buttonForm" for="photo">
            Añadir imagen
          </label>
        </div>
        <input
          className="form__input button-image js-inputPhoto"
          type="file"
          value=""
          id="photo"
        />
        <div className="small-image__container smallphoto js-smallPhoto"></div>
      </div>
    </div>
  );
}

export default GetAvatar;
