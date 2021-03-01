function Icon(props) {
  return (
    <div className={`page__icons--icon ${props.icon} ${props.palette}`}>
      <a href="" className={`link-icon ${props.palette}`} target={props.target}>
        <i className={props.iconLink} aria-hidden="true" alt={props.alt}></i>
      </a>
    </div>
  );
}

Icon.defaultProps = {
  target: "_blank",
};

export default Icon;
