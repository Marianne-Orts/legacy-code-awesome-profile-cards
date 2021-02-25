function PreviewCard() {
  return (
    <>
      <div className="container ">
        <div className="container__main-texts ">
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
    </>
  );
}
/* PreviewCard.defaultProps = {
  props : "Paquita Salas",
   props : "CEO PS Management",
  props : "previewPhoto"
};  */
export default PreviewCard;
