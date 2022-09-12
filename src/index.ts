import { initRouter } from "./router";
import { initHeader } from "./components/header";
import { initFooter } from "./components/footer";
import { initButton } from "./components/normal-button";
import { initOutlinedButton } from "./components/outlined-button";
import { initSelectInput } from "./components/select-input";
import { initText } from "./components/text";
import { initTextInput } from "./components/text-input";

function main() {
  const root = document.querySelector(".root");
  initHeader();
  initFooter();
  initButton("Comenzar");
  initOutlinedButton("Seguir");
  initSelectInput();
  initText();
  initTextInput();

  initRouter(root!);
}

main();
