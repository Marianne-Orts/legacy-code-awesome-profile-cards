function Icon(props) {
  return (
    <div className={"page__icons--icon " + props.icon}>
      <a href="" className="link-icon" target={props.target}>
        <i className={props.iconLink} aria-hidden="true" alt={props.alt}></i>
      </a>
    </div>
  );
}

Icon.defaultProps = {
  target: "_blank",
};

export default Icon;
