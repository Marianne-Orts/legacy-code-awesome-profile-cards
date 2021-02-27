import IconsList from "./IconsList";

function Preview(props) {
  return (
    <div className="divided__paquita">
      <section className="preview">
        <button className="reset js-reset">
          <i className="fa fa-trash-alt" aria-hidden="true" alt="trash-can"></i>
          Reset
        </button>
        <section className="page js-card">
          <div className={`container ${props.palettesColor}`}>
            <div className={`container__main-texts ${props.clasePalettes}`}>
              <h2 className="container__main-texts--title jsnamepreview">
                Paquita Salas
              </h2>
              <h3 className="container__main-texts--subtitle jsjobpreview">
                CEO PS Management
              </h3>
            </div>
          </div>
          <div className="Page__container">
            <div className="page__container--photo js-previewPhoto js-previewPhotoReset "></div>
          </div>
          <IconsList />
        </section>
      </section>
    </div>
  );
}

export default Preview;
