export function initBodyText(content: string) {
  class CustomBodyText extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = `${content}`;
      this.style.fontFamily = "Poppins";
      this.style.fontSize = "18px";
      this.style.fontWeight = "400";
    }
  }
  customElements.define("text-custom", CustomBodyText);
}
