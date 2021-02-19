function Icons() {
  return (
    <section className="page__icons">
      <div className="page__icons--icon icon-phone">
        <a href="" className="link-icon jsphonelink" target="_blank">
          <i
            className="fas fa-mobile-alt link"
            aria-hidden="true"
            alt="icon-phone"
          ></i>
        </a>
      </div>
      <div className="page__icons--icon icon-mail ">
        <a href="" className="link-icon jsmaillink">
          <i
            className="far fa-envelope link"
            aria-hidden="true"
            alt="icon-mail"
          ></i>
        </a>
      </div>
      <div className="page__icons--icon icon-linkedin">
        <a href="" className="link-icon jslinkedinlink" target="_blank">
          <i
            className="fab fa-linkedin-in link"
            aria-hidden="true"
            alt="icon-linkedin"
          ></i>
        </a>
      </div>

      <div className="page__icons--icon icon-github">
        <span className="page__icons--circle"></span>
        <a href="" className="link-icon jsgithublink" target="_blank">
          <i
            className="fab fa-github-alt link"
            aria-hidden="true"
            alt="icon-github"
          ></i>
        </a>
      </div>
    </section>
  );
}
export default Icons;
