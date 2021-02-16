"use strict";

const paletteElements = document.querySelectorAll(".js-palette");
const cardElement = document.querySelector(".js-card");

function updatePalette() {
  // borro las clases palette-1, palette-2 y palette-3 del js-card
  cardElement.classList.remove(
    "palette-1",
    "palette-2",
    "palette-3",
    "palette-4"
  );

  // añado palette-x a js-card en función de la paleta seleccionada
  const paletteValue = document.querySelector(".js-palette:checked").value;
  cardElement.classList.add("palette-" + paletteValue);
  saveInLocalStorage();
}
for (const paletteElement of paletteElements) {
  paletteElement.addEventListener("change", updatePalette);
}
