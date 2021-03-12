"use strict";

const deleteButton = document.querySelector(".js-reset");
const inputElements = document.querySelectorAll(".form__input");
const previewPhoto = document.querySelector(".js-previewPhotoReset");

function handleDelete() {
  handleDeleteForm();
  handleResetDesignPreview();
  handleResetDesignValue();
  handleResetShare();
  saveInLocalStorage();
}

function handleDeleteForm() {
  for (let i = 0; i < inputElements.length; i++) {
    if (inputElements[i].value !== "") {
      inputElements[i].value = "";
    }
  }
  photo = "";
  handleName();
  handleJob();
  handleMail();
  handlePhone();
  handleLinkedin();
  handleGithub();
  updatePhoto();
}

function handleResetDesignPreview() {
  const paletteValue = document.querySelector(".js-palette:checked").value;
  cardElement.classList.remove("palette-" + paletteValue);
}

function handleResetDesignValue() {
  const paletteInput1 = document.querySelector(".js-input1");
  const palettetoReset = document.querySelector(".js-palette:checked");
  palettetoReset.checked = false;
  paletteInput1.checked = true;
}

function handleResetShare() {
  linksContainer.classList.add("share__hidden");
  shareBtn.classList.remove("button-backgroundcolor");
}

deleteButton.addEventListener("click", handleDelete);
