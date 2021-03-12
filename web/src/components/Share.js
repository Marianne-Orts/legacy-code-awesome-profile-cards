function Share(props) {
  const handleShare = (event) => {
    props.handleShareWithLifting(event.target.value);
  };
  const showShare =
    props.responseApi.explanationText.length !== 0 ? "" : "share__hidden";
  const linkTwitter = `https://twitter.com/intent/tweet?url=Échale%20un%20vistazo%20a%20mi%20tarjeta%20virtual%20${props.responseApi.cardUrl}`;
  const showTwitter = props.responseApi.success ? "" : "twitterhidden";
  return (
    <div
      className={
        "share-button  dropdownsharecontainer dropdowncontainer " + props.hidden
      }
    >
      <button className="share-button__create-card " onClick={handleShare}>
        <i className="far fa-address-card share__create card"></i> Crear tarjeta
      </button>

      <div className={showShare}>
        <p className="share-text ">{props.responseApi.explanationText}</p>
        <a
          href={props.responseApi.cardUrl}
          className={showTwitter + " urlcard"}
          target="_blank"
          rel="noreferrer"
        >
          {props.responseApi.cardUrl}
        </a>

        <div className="share-button-twitter--container">
          <button className={showTwitter + " share-button--twitter"}>
            <a
              href={linkTwitter}
              className="twitterlink"
              target="_blank"
              rel="noreferrer"
            >
              Compartir en twitter
            </a>
            <i className="fab fa-twitter"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
