"use strict";

//Form
const form = document.querySelector(".jsform");

function handleForm(ev) {
  ev.preventDefault();
}

form.addEventListener("submit", handleForm);

//Name
const fullName = document.querySelector(".jsname");
const previewName = document.querySelector(".jsnamepreview");

function handleName(ev) {
  let nameValue = fullName.value;

  if (nameValue === "") {
    previewName.innerHTML = "Paquita Salas";
  } else {
    previewName.innerHTML = nameValue;
  }
  // check intro key
  if (ev && ev.keyCode === 13) {
    jobElement.focus();
  }
  saveInLocalStorage();
}

fullName.addEventListener("keyup", handleName);

//Job
const jobElement = document.querySelector(".jsjob");
const previewJob = document.querySelector(".jsjobpreview");

function handleJob(ev) {
  let jobValue = jobElement.value;

  if (jobValue === "") {
    previewJob.innerHTML = "CEO PS Management";
  } else {
    previewJob.innerHTML = jobValue;
  }

  if (ev && ev.keyCode === 13) {
    uploadBtn.click();
    if (profileImage !== "") {
      mail.focus();
    }
  }

  saveInLocalStorage();
}

jobElement.addEventListener("keyup", handleJob);

//Photo

//Mail
const mail = document.querySelector(".jsmail");
const previewMail = document.querySelector(".jsmaillink");

function handleMail(ev) {
  const mailIcon = document.querySelector(".icon-mail");
  let mailValue = mail.value;
  if (mailValue === "") {
    previewMail.href = "#";
    mailIcon.classList.remove("fullicon-palette");
  } else {
    mailIcon.classList.add("fullicon-palette");
    previewMail.href = `mailto:${mailValue}`;
  }
  if (ev && ev.keyCode === 13) {
    telephone.focus();
  }
  saveInLocalStorage();
}
mail.addEventListener("keyup", handleMail);

function preventLink(event) {
  if (mail.value === "") {
    event.preventDefault();
  }
  saveInLocalStorage();
}
previewMail.addEventListener("click", preventLink);

//Phone
const telephone = document.querySelector(".jsphone");
const previewTelephone = document.querySelector(".jsphonelink");

function handlePhone(ev) {
  let telephoneValue = telephone.value;
  const phoneFull = document.querySelector(".icon-phone");
  if (telephoneValue === "") {
    previewTelephone.href = "#";
    phoneFull.classList.remove("fullicon-palette");
  } else {
    previewTelephone.href = `tel:${telephoneValue}`;
    phoneFull.classList.add("fullicon-palette");
  }

  if (ev && ev.keyCode === 13) {
    linkedin.focus();
  }
  saveInLocalStorage();
}
telephone.addEventListener("keyup", handlePhone);

function preventTelephone(event) {
  if (telephone.value === "") {
    event.preventDefault();
  }
  saveInLocalStorage();
}
previewTelephone.addEventListener("click", preventTelephone);

//Linkedin
const linkedin = document.querySelector(".jslinkedin");
const previewLinkedin = document.querySelector(".jslinkedinlink");

function handleLinkedin(ev) {
  const linkedinFull = document.querySelector(".icon-linkedin");
  let linkedinValue = linkedin.value;
  let newLinkedinValue = linkedinValue.replace(
    "https://www.linkedin.com/in/",
    ""
  );

  if (linkedinValue === "") {
    previewLinkedin.href = "#";
    linkedinFull.classList.remove("fullicon-palette");
  } else {
    previewLinkedin.href = `https://www.linkedin.com/in/${newLinkedinValue}`;
    linkedinFull.classList.add("fullicon-palette");
  }
  if (ev && ev.keyCode === 13) {
    github.focus();
  }
  saveInLocalStorage();
}
linkedin.addEventListener("keyup", handleLinkedin);

function preventLinkedin(event) {
  if (linkedin.value === "") {
    event.preventDefault();
  }
  saveInLocalStorage();
}
previewLinkedin.addEventListener("click", preventLinkedin);

//Github
const github = document.querySelector(".jsgithub");
const previewGithub = document.querySelector(".jsgithublink");

function handleGithub(ev) {
  const githubFull = document.querySelector(".icon-github");
  let githubValue = github.value;
  let newGithubValue = githubValue.replace("https://github.com/", "");

  if (githubValue === "") {
    previewGithub.href = "#";
    githubFull.classList.remove("fullicon-palette");
  } else {
    previewGithub.href = `https://github.com/${newGithubValue}`;
    githubFull.classList.add("fullicon-palette");
  }
  // check intro key
  if (ev && ev.keyCode === 13) {
    const dropdownShareBtn = document.querySelector(".dropdownshare-btn");
    dropdownShareBtn.click();
    const shareBtn = document.querySelector(".jssharebtn");
    shareBtn.focus();
  }
  saveInLocalStorage();
}
github.addEventListener("keyup", handleGithub);

function preventGithub(event) {
  if (github.value === "") {
    event.preventDefault();
  }
  saveInLocalStorage();
}
