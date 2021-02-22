import Collapsable from "./Collapsable";

function CollapsableList() {
  return (
    <>
      <Collapsable iconCollapsable={"far fa-object-ungroup"} title={"Diseña"} />
      <Collapsable
        iconCollapsable={"far fa-keyboard dropdown__icon"}
        title={"Rellena"}
      />
      <Collapsable
        shareBtn={"dropdownshare-btn"}
        iconCollapsable={"fas fa-share-alt"}
        title={"Comparte"}
      />
    </>
  );
}

export default CollapsableList;
