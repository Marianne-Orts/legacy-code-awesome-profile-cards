import PreviewCard from "./PreviewCard";
import Reset from "./Reset";

import IconsList from "./IconsList";

function Preview() {
  return (
    <div className="divided__paquita">
      <section className="preview">
        <Reset />
        <section className="page js-card">
          <PreviewCard />
          <IconsList />
        </section>
      </section>
    </div>
  );
}

export default Preview;
