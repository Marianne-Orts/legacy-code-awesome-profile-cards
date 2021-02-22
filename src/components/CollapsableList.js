import Collapsable from "./Collapsable";

function CollapsableList() {
  return (
    <div className="dropdown js-dropdown-header ">
      <div className="dropdown__title">
        <span className="dropdown__icon dropdown__icon--left far fa-object-ungroup"></span>
        <h2 className="dropdown__text">Diseña</h2>
      </div>
      <i className="fa fa-chevron-down js-arrow dropdown__arrow"></i>
    </div>
  );
}

export default CollapsableList;

/* <div className="dropdown js-dropdown-header dropdownshare-btn">
          <div className="dropdown__title">
            <span className="dropdown__icon dropdown__icon--left fas fa-share-alt"></span>
            <h2 className="dropdown__text">Comparte</h2>
          </div>
          <i className="fa fa-chevron-down js-arrow dropdown__arrow"></i>
        </div> */

/* <div className="dropdown js-dropdown-header ">
          <div className="dropdown__title">
            <span className="dropdown__icon dropdown__icon--left far fa-keyboard dropdown__icon "></span>
            <h2 className="dropdown__text">Rellena</h2>
          </div>
          <i className="fa fa-chevron-down js-arrow dropdown__arrow"></i>
        </div> */
