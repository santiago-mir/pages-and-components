export function initMediumTitle(content: string) {
  class CustomMediumTitle extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = `${content}`;
      this.style.fontFamily = "Poppins";
      this.style.fontSize = "38px";
      this.style.fontWeight = "700";
    }
  }
  customElements.define("medium-title-custom", CustomMediumTitle);
}
