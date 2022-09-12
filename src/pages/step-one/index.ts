export function initStepOnePage(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <header-custom></header-custom>
  <text-custom variant="large-title">Hola q tal</text-custom>
  <text-input-custom label="Email" type="Email"></text-input-custom>
  <text-input-custom label="Comida Favorita" type="text"></text-input-custom>
  <select-custom label="Elegi algo"></select-custom>
  <button-custom></button-custom>
  <outlined-button-custom></outlined-button-custom>
  <footer-custom></footer-custom>
  `;

  return div;
}
