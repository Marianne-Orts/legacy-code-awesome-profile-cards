import Palettes from "./Palettes";
import InputList from "./InputList";
import GetAvatar from "./GetAvatar";
import Share from "./Share";
import Collapsable from "./Collapsable";

function Form() {
  return (
    <div className="centralcolumn divided__options">
      <section className="design">
        <Collapsable
          iconCollapsable={"far fa-object-ungroup"}
          title={"Diseña"}
        />
        <Palettes hidden="" />
        <div className="line-dividing--fill"></div>
      </section>

      <section className="fill">
        <Collapsable
          iconCollapsable={"far fa-keyboard dropdown__icon"}
          title={"Rellena"}
        />
        <InputList hidden="" />
        <GetAvatar />

        <div className="line-dividing--fill"></div>
      </section>
      <section className="share">
        <Collapsable
          shareBtn={"dropdownshare-btn"}
          iconCollapsable={"fas fa-share-alt"}
          title={"Comparte"}
        />
        <Share hidden="" />
        <div className="line-dividing"></div>
      </section>
    </div>
  );
}

export default Form;
