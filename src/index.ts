import { initWelcomePage } from "./pages/welcome";

function main() {
  const root = document.querySelector(".root");
  root?.appendChild(initWelcomePage());
}

main();
