export function initFooter() {
  class CustomFooter extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = `<footer> Footer </Footer>`;
      this.style.fontFamily = "Poppins";
      this.style.fontSize = "22px";
      this.style.display = "flex";
      this.style.justifyContent = "center";
      this.style.alignItems = "center";
      this.style.backgroundColor = "#FFA0EA";
      this.style.height = "150px";
    }
  }
  customElements.define("footer-custom", CustomFooter);
}
