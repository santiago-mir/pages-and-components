import { initHeader } from "./components/header";
import { initLargeTitle } from "./components/large-title";
import { initTextInput } from "./components/text-input";

function main() {
  initHeader();
  initLargeTitle("Te damos la bienvenida a esta página");
  initTextInput();
}

main();
