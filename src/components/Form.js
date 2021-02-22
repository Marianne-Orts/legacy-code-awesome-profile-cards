import Collapsable from "./Collapsable";
import Palettes from "./Palettes";
import InputList from "./InputList";
import GetAvatar from "./GetAvatar";
import Share from "./Share";

function Form() {
  return (
    <div className="centralcolumn divided__options">
      <section className="design">
        <Collapsable />
        <Palettes />
      </section>

      <section className="fill">
        <div className="line-dividing--fill"></div>
        <Collapsable />
        <InputList />
        <GetAvatar />

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
