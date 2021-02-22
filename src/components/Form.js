import Collapsable from "./Collapsable";
import Palettes from "./Palettes";
import InputList from "./InputList";
import GetAvatar from "./GetAvatar";
import Share from "./Share";
import CollapsableList from "./CollapsableList";

function Form() {
  return (
    <div className="centralcolumn divided__options">
      <section className="design">
        <CollapsableList />
        <Palettes />
        <div className="line-dividing--fill"></div>
      </section>

      <section className="fill">
        <CollapsableList />
        <InputList />
        <GetAvatar />

        <div className="line-dividing--fill"></div>
      </section>
      <section className="share">
        <CollapsableList />
        <Share />
        <div className="line-dividing"></div>
      </section>
    </div>
  );
}

export default Form;
