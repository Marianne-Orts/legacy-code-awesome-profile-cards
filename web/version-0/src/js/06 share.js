"use strict";

const shareBtn = document.querySelector(".jssharebtn");
const linksContainer = document.querySelector(".jssharelinks");
const textUrl = document.querySelector(".jsShareText");
const linkUrl = document.querySelector(".jsUrl");
const twitterUrl = document.querySelector(".jsTwitter");
const twitterButton = document.querySelector(".jstwitterbutton");

function handleShare() {
  shareBtn.classList.add("button-backgroundcolor");
  const urlServe = "https://awesome-profile-cards.herokuapp.com/card";
  const data = getUserData();
  fetch(urlServe, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      linksContainer.classList.remove("share__hidden");
      if (data.success === true) {
        textUrl.innerHTML = "La tarjeta ha sido creada:";
        linkUrl.innerHTML = data.cardURL;
        linkUrl.href = data.cardURL;
        const urlTwitter = data.cardURL;
        twitterUrl.href = `https://twitter.com/intent/tweet?url=Échale%20un%20vistazo%20a%20mi%20tarjeta%20virtual%20${urlTwitter}`;
        twitterButton.classList.remove("twitterhidden");
      } else {
        textUrl.innerHTML =
          "Ups! No se ha podido crear tu tarjeta. Rellena todos tus datos.";
        linkUrl.href = "";
        linkUrl.innerHTML = "";
        twitterButton.classList.add("twitterhidden");
      }
    });
}

shareBtn.addEventListener("click", handleShare);
