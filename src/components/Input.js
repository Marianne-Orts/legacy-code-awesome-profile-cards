function Input(props) {
  return (
    <div className="fill__container">
      <label className="form__label" for={props.id}>
        {props.label}
      </label>
      <input
        className="form__input"
        placeholder={props.placeholder}
        id={props.id}
        type={props.type}
        name={props.id}
        value=""
      />
    </div>
  );
}
Input.defaultProps = {
  type: "text",
};
export default Input;
