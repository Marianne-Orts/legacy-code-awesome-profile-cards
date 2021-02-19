import PreviewCard from "./PreviewCard";
import Reset from "./Reset";
import Icons from "./Icons";

function Preview() {
  return (
    <div className="divided__paquita">
      <section className="preview">
        <Reset />
        <section className="page js-card">
          <PreviewCard />
          <Icons />
        </section>
      </section>
    </div>
  );
}

export default Preview;
