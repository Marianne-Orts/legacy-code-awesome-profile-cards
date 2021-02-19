function Share() {
  return (
    <div className="share-button hidden dropdownsharecontainer dropdowncontainer">
      <button className="share-button__create-card jssharebtn">
        <i className="far fa-address-card share__create card"></i> Crear tarjeta
      </button>
      <div className="share__hidden jssharelinks">
        <p className="share-text jsShareText"></p>
        <a href="" className="jsUrl urlcard" target="_blank"></a>
        <div className="share-button-twitter--container">
          <button className="twitterhidden share-button--twitter jstwitterbutton">
            <a href="" className="jsTwitter twitterlink" target="_blank">
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
