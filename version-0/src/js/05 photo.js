"use strict";

const fr = new FileReader();
const uploadBtn = document.querySelector(".js-buttonForm");
const fileField = document.querySelector(".js-inputPhoto");
const profileImage = document.querySelector(".js-smallPhoto");
const profilePreview = document.querySelector(".js-previewPhoto");
/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
let photo = "";

/*//Photo with keyVode 13-Intro
function handlePhoto(ev) {
  if (ev && ev.keyCode === 13) {
    mail.focus();
  }
  saveInLocalStorage();
}
handleMail();
fileField.addEventListener("keyup", handlePhoto);*/

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}
/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */

function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */

  photo = fr.result;
  updatePhoto();
  // después de cualquier acción del usuario guardo en el local storage
  saveInLocalStorage();
}

function updatePhoto() {
  const currentPhoto = photo || "./assets/images/paquita.png";
  profilePreview.style.backgroundImage = `url(${currentPhoto})`;
  profileImage.style.backgroundImage = `url(${currentPhoto})`;
}
/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
fileField.addEventListener("change", getImage);
