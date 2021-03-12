"use strict";const form=document.querySelector(".jsform");function handleForm(e){e.preventDefault()}form.addEventListener("submit",handleForm);const fullName=document.querySelector(".jsname"),previewName=document.querySelector(".jsnamepreview");function handleName(e){let t=fullName.value;previewName.innerHTML=""===t?"Paquita Salas":t,e&&13===e.keyCode&&jobElement.focus(),saveInLocalStorage()}fullName.addEventListener("keyup",handleName);const jobElement=document.querySelector(".jsjob"),previewJob=document.querySelector(".jsjobpreview");function handleJob(e){let t=jobElement.value;previewJob.innerHTML=""===t?"CEO PS Management":t,e&&13===e.keyCode&&(uploadBtn.click(),""!==profileImage&&mail.focus()),saveInLocalStorage()}jobElement.addEventListener("keyup",handleJob);const mail=document.querySelector(".jsmail"),previewMail=document.querySelector(".jsmaillink");function handleMail(e){const t=document.querySelector(".icon-mail");let n=mail.value;""===n?(previewMail.href="#",t.classList.remove("fullicon-palette")):(t.classList.add("fullicon-palette"),previewMail.href="mailto:"+n),e&&13===e.keyCode&&telephone.focus(),saveInLocalStorage()}function preventLink(e){""===mail.value&&e.preventDefault(),saveInLocalStorage()}mail.addEventListener("keyup",handleMail),previewMail.addEventListener("click",preventLink);const telephone=document.querySelector(".jsphone"),previewTelephone=document.querySelector(".jsphonelink");function handlePhone(e){let t=telephone.value;const n=document.querySelector(".icon-phone");""===t?(previewTelephone.href="#",n.classList.remove("fullicon-palette")):(previewTelephone.href="tel:"+t,n.classList.add("fullicon-palette")),e&&13===e.keyCode&&linkedin.focus(),saveInLocalStorage()}function preventTelephone(e){""===telephone.value&&e.preventDefault(),saveInLocalStorage()}telephone.addEventListener("keyup",handlePhone),previewTelephone.addEventListener("click",preventTelephone);const linkedin=document.querySelector(".jslinkedin"),previewLinkedin=document.querySelector(".jslinkedinlink");function handleLinkedin(e){const t=document.querySelector(".icon-linkedin");let n=linkedin.value,o=n.replace("https://www.linkedin.com/in/","");""===n?(previewLinkedin.href="#",t.classList.remove("fullicon-palette")):(previewLinkedin.href="https://www.linkedin.com/in/"+o,t.classList.add("fullicon-palette")),e&&13===e.keyCode&&github.focus(),saveInLocalStorage()}function preventLinkedin(e){""===linkedin.value&&e.preventDefault(),saveInLocalStorage()}linkedin.addEventListener("keyup",handleLinkedin),previewLinkedin.addEventListener("click",preventLinkedin);const github=document.querySelector(".jsgithub"),previewGithub=document.querySelector(".jsgithublink");function handleGithub(e){const t=document.querySelector(".icon-github");let n=github.value,o=n.replace("https://github.com/","");if(""===n?(previewGithub.href="#",t.classList.remove("fullicon-palette")):(previewGithub.href="https://github.com/"+o,t.classList.add("fullicon-palette")),e&&13===e.keyCode){document.querySelector(".dropdownshare-btn").click();document.querySelector(".jssharebtn").focus()}saveInLocalStorage()}function preventGithub(e){""===github.value&&e.preventDefault(),saveInLocalStorage()}github.addEventListener("keyup",handleGithub);const paletteElements=document.querySelectorAll(".js-palette"),cardElement=document.querySelector(".js-card");function updatePalette(){cardElement.classList.remove("palette-1","palette-2","palette-3","palette-4");const e=document.querySelector(".js-palette:checked").value;cardElement.classList.add("palette-"+e),saveInLocalStorage()}for(const e of paletteElements)e.addEventListener("change",updatePalette);const deleteButton=document.querySelector(".js-reset"),inputElements=document.querySelectorAll(".form__input"),previewPhoto=document.querySelector(".js-previewPhotoReset");function handleDelete(){handleDeleteForm(),handleResetDesignPreview(),handleResetDesignValue(),handleResetShare(),saveInLocalStorage()}function handleDeleteForm(){for(let e=0;e<inputElements.length;e++)""!==inputElements[e].value&&(inputElements[e].value="");photo="",handleName(),handleJob(),handleMail(),handlePhone(),handleLinkedin(),handleGithub(),updatePhoto()}function handleResetDesignPreview(){const e=document.querySelector(".js-palette:checked").value;cardElement.classList.remove("palette-"+e)}function handleResetDesignValue(){const e=document.querySelector(".js-input1");document.querySelector(".js-palette:checked").checked=!1,e.checked=!0}function handleResetShare(){linksContainer.classList.add("share__hidden"),shareBtn.classList.remove("button-backgroundcolor")}deleteButton.addEventListener("click",handleDelete);const dropdownHeaders=document.querySelectorAll(".js-dropdown-header");function changeDropdown(e){const t=e.currentTarget,n=t.querySelector(".js-arrow"),o=t.parentNode.querySelector(".dropdowncontainer"),l=o.classList.contains("hidden"),r=document.querySelectorAll(".js-arrow");for(const e of r)e.classList.remove("changeArrow");const a=document.querySelectorAll(".dropdowncontainer");for(const e of a)e.classList.add("hidden");l?(n.classList.add("changeArrow"),n.classList.remove("dropdown__arrow"),o.classList.remove("hidden")):(n.classList.remove("changeArrow"),n.classList.add("dropdown__arrow"),o.classList.add("hidden"))}for(const e of dropdownHeaders)e.addEventListener("click",changeDropdown);const fr=new FileReader,uploadBtn=document.querySelector(".js-buttonForm"),fileField=document.querySelector(".js-inputPhoto"),profileImage=document.querySelector(".js-smallPhoto"),profilePreview=document.querySelector(".js-previewPhoto");let photo="";function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){photo=fr.result,updatePhoto(),saveInLocalStorage()}function updatePhoto(){const e=photo||"./assets/images/paquita.png";profilePreview.style.backgroundImage=`url(${e})`,profileImage.style.backgroundImage=`url(${e})`}fileField.addEventListener("change",getImage);const shareBtn=document.querySelector(".jssharebtn"),linksContainer=document.querySelector(".jssharelinks"),textUrl=document.querySelector(".jsShareText"),linkUrl=document.querySelector(".jsUrl"),twitterUrl=document.querySelector(".jsTwitter"),twitterButton=document.querySelector(".jstwitterbutton");function handleShare(){shareBtn.classList.add("button-backgroundcolor");const e=getUserData();fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then(e=>e.json()).then(e=>{if(linksContainer.classList.remove("share__hidden"),!0===e.success){textUrl.innerHTML="La tarjeta ha sido creada:",linkUrl.innerHTML=e.cardURL,linkUrl.href=e.cardURL;const t=e.cardURL;twitterUrl.href="https://twitter.com/intent/tweet?url=Échale%20un%20vistazo%20a%20mi%20tarjeta%20virtual%20"+t,twitterButton.classList.remove("twitterhidden")}else textUrl.innerHTML="Ups! No se ha podido crear tu tarjeta. Rellena todos tus datos.",linkUrl.href="",linkUrl.innerHTML="",twitterButton.classList.add("twitterhidden")})}function getUserData(){return{photo:photo,palette:parseInt(document.querySelector(".js-palette:checked").value),name:document.querySelector(".jsname").value,job:document.querySelector(".jsjob").value,email:document.querySelector(".jsmail").value,phone:document.querySelector(".jsphone").value,linkedin:document.querySelector(".jslinkedin").value,github:document.querySelector(".jsgithub").value}}function saveInLocalStorage(){const e=getUserData(),t=JSON.stringify(e);localStorage.setItem("userData",t)}function getFromLocalStorage(){const e=localStorage.getItem("userData");if(null!==e){const t=JSON.parse(e);document.querySelector(".jsname").value=t.name,document.querySelector(".jsjob").value=t.job,document.querySelector(".jsmail").value=t.email,document.querySelector(".jsphone").value=t.phone,document.querySelector(".jslinkedin").value=t.linkedin,document.querySelector(".jsgithub").value=t.github,photo=t.photo;const n=document.querySelectorAll(".js-palette");for(const e of n)parseInt(e.value)===t.palette&&(e.checked=!0);handleName(),handleJob(),handleMail(),handlePhone(),handleLinkedin(),handleGithub(),updatePalette(),updatePhoto()}}shareBtn.addEventListener("click",handleShare),getFromLocalStorage();