function Icon(props) {
  return (
    <div className={`page__icons--icon ${props.palette} props.icon`}>
      <a
        href={props.href}
        className={`link-icon ${props.palette}`}
        //target="_blank"
      >
        <i className={props.iconLink} aria-hidden="true" alt={props.alt}></i>
      </a>
    </div>
  );
}

Icon.defaultProps = {
  target: "_blank",
};

export default Icon;
