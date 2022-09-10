export function initLargeTitle(content: string) {
  class CustomLargeTitle extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = `${content}`;
      this.style.fontFamily = "Poppins";
      this.style.fontSize = "52px";
      this.style.fontWeight = "900";
    }
  }
  customElements.define("large-title-custom", CustomLargeTitle);
}
