export function initHeader() {
  class CustomHeader extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = `<header> Header </header>`;
      this.style.fontFamily = "Poppins";
      this.style.fontSize = "22px";
      this.style.display = "flex";
      this.style.justifyContent = "center";
      this.style.alignItems = "center";
      this.style.backgroundColor = "#FF8282";
      this.style.height = "60px";
    }
  }
  customElements.define("header-custom", CustomHeader);
}
