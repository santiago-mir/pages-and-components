import { initHeader } from "../../components/header";
import { initLargeTitle } from "../../components/large-title";
import { initBodyText } from "../../components/text";
import { initMediumTitle } from "../../components/medium-title";
import { initTextInput } from "../../components/text-input";
import { initButton } from "../../components/normal-button";
import { initFooter } from "../../components/footer";

export function initWelcomePage() {
  const div = document.createElement("div");
  div.innerHTML = `
  <header-custom></header-custom>
  <large-title-custom></large-title-custom>
  <text-custom></text-custom>
  <medium-title-custom></medium-title-custom>
  <text-input-custom label="Nombre"></text-input-custom>
  <button-custom></button-custom>
  <footer-custom></footer-custom>
  `;

  initHeader();
  initLargeTitle("Te damos la bienvenida a esta página");
  initBodyText(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?"
  );
  initMediumTitle("Para continuar ingresá tu nombre");
  initTextInput();
  initButton("Comenzar");
  initFooter();
  return div;
}
