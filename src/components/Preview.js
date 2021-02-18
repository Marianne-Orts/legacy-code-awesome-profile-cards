
function Preview() {
    return (
        <div className="divided__paquita">
            <section className="preview">
                <button className="reset js-reset">
                    {" "}
                    <i
                        className="fa fa-trash-alt"
                        aria-hidden="true"
                        alt="trash-can"
                    ></i>{" "}
              Reset
            </button>
                <section className="page js-card">
                    <div className="container ">
                        <div className="container__main-texts ">
                            <h2 className="container__main-texts--title jsnamepreview">
                                Paquita Salas
                  </h2>
                            <h3 className="container__main-texts--subtitle jsjobpreview">
                                CEO PS Management
                  </h3>
                        </div>
                    </div>
                    <div className="Page__container">
                        <div className="page__container--photo js-previewPhoto js-previewPhotoReset "></div>
                    </div>
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
                            <a
                                href=""
                                className="link-icon jslinkedinlink"
                                target="_blank"
                            >
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
                </section>
            </section>
        </div>
    );
}

export default Preview;