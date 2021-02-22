import Collapsable from "./Collapsable";
import Palettes from "./Palettes";
import Inputs from "./Inputs";
import GetAvatar from "./GetAvatar";
import Share from "./Share";

function Form() {
  return (
    <div className="centralcolumn divided__options">
      <section className="design">
        <Collapsable />
        <Palettes />
        <div className="line-dividing--fill"></div>
      </section>

      <section className="fill">
        <Collapsable />
        <Inputs />
        <GetAvatar />
        <Inputs />

        <div className="line-dividing--fill"></div>
      </section>
      <section className="share">
        <Collapsable />
        <Share />
        <div className="line-dividing"></div>
      </section>
    </div>
  );
}

export default Form;
