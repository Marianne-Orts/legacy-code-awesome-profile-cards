import IconsList from "./IconsList";

function Preview(props) {
  console.log("Preview -> props", props);
  const clasePalettes = `palette-${props.data.palette}`;

  return (
    <div className="divided__paquita">
      <section className="preview">
        <button className="reset js-reset" onClick={props.handleReset}>
          <i className="fa fa-trash-alt" aria-hidden="true" alt="trash-can"></i>
          Reset
        </button>
        <section className="page js-card">
          <div className={`container ${props.palettesColor}`}>
            <div className={`container__main-texts ${clasePalettes}`}>
              <h2 className="container__main-texts--title jsnamepreview">
                {props.data.name || 'Paquita Salas'}
              </h2>
              <h3 className="container__main-texts--subtitle jsjobpreview">
                {props.data.job || 'CEO PS Managment'}
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
