import PreviewCard from "./PreviewCard";
import IconsList from "./IconsList";

function Preview(props) {

  return (
    <div className="divided__paquita">
      <section className="preview">
        <button className="reset js-reset" onClick={props.handleReset}>
          <i className="fa fa-trash-alt" aria-hidden="true" alt="trash-can"></i>
      Reset
    </button>
        <section className="page js-card">
          <PreviewCard data={props.data} />
          <IconsList />
        </section>
      </section>
    </div>
  );
}

export default Preview;
