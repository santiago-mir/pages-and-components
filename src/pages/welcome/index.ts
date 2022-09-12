export function initWelcomePage(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <header-custom></header-custom>
  <text-custom variant="large-title">Te damos la bienvenida a esta página</text-custom>
  <text-custom variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</text-custom>
  <text-custom variant="small-title">Para continuar ingresá tu nombre</text-custom>
  <text-input-custom label="Nombre" type="text"></text-input-custom>
  <button-custom></button-custom>
  <footer-custom></footer-custom>
  `;
  const algo = div.getElementsByTagName("button-custom");
  algo[0].addEventListener("click", () => {
    params.goTo("/step-one");
  });

  return div;
}
