import React, { Component } from "react";
import defaultAvatar from "../images/paquita.png";
import "./App.scss";
import PropTypes from "prop-types";

class GetAvatar extends Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();

    /* this.handleFilePicker = this.handleFilePicker.bind(this); */
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  /*  handleFilePicker() {
    this.myFileField.current.click();
  } */

  uploadImage(ev) {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      this.fr.addEventListener("load", this.getImage);
      this.fr.readAsDataURL(myFile);
    }
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  /* getPreview(isDefault, image) {
    return !isDefault ? { backgroundImage: `url(${image})` } : {};
  }
 */
  render() {
    /* const { isAvatarDefault, avatar } = this.props; */
    const avatar = this.props.avatar === "" ? defaultAvatar : this.props.avatar;
    return (
      <div className="fill__container">
        <label className="form__label" for="photo">
          Imagen de perfil
        </label>
        <div className="image-form__container">
          <div className="button">
            <label
              className="button__form js-buttonForm"
              onClick={this.handleFilePicker}
              for="photo"
            >
              Añadir imagen
            </label>
          </div>
          <input
            className="form__input button-image js-inputPhoto"
            type="file"
            value=""
            id="photo"
            ref={this.myFileField}
            onChange={this.uploadImage}
          />
          <div
            className="small-image__container smallphoto js-smallPhoto"
            /* style={this.getPreview(isAvatarDefault, avatar)} */
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
        </div>
      </div>
    );
  }
}

GetAvatar.propTypes = {
  isAvatarDefault: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
