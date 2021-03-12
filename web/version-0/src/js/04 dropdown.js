"use strict";

const dropdownHeaders = document.querySelectorAll(".js-dropdown-header");

function changeDropdown(ev) {
  const header = ev.currentTarget;
  const arrow = header.querySelector(".js-arrow");
  const container = header.parentNode.querySelector(".dropdowncontainer");
  const isClose = container.classList.contains("hidden");
  // close all arrows
  const allArrow = document.querySelectorAll(".js-arrow");
  for (const arrow of allArrow) {
    arrow.classList.remove("changeArrow");
  }
  // close all containers
  const allContainers = document.querySelectorAll(".dropdowncontainer");
  for (const container of allContainers) {
    container.classList.add("hidden");
  }
  // toggle arrow
  if (isClose) {
    arrow.classList.add("changeArrow");
    arrow.classList.remove("dropdown__arrow");
    container.classList.remove("hidden");
  } else {
    arrow.classList.remove("changeArrow");
    arrow.classList.add("dropdown__arrow");
    container.classList.add("hidden");
  }
}

for (const dropdownHeader of dropdownHeaders) {
  dropdownHeader.addEventListener("click", changeDropdown);
}
