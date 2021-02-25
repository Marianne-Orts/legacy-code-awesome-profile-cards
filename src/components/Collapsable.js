function Collapsable(props) {
  return (
    <div
      className="dropdown js-dropdown-header"
      shareBtn={props.shareBtn}
      onClick={props.funcion}
    >
      <div className="dropdown__title">
        <span
          className={`dropdown__icon dropdown__icon--left ${props.iconCollapsable}`}
        ></span>
        <h2 className="dropdown__text">{props.title}</h2>
      </div>
      <i className="fa fa-chevron-down js-arrow dropdown__arrow"></i>
    </div>
  );
}
export default Collapsable;
