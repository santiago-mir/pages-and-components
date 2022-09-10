export function initSmallTitle(content: string) {
  class CustomSmallTitle extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = `${content}`;
      this.style.fontFamily = "Poppins";
      this.style.fontSize = "22px";
      this.style.fontWeight = "500";
    }
  }
  customElements.define("medium-title-custom", CustomSmallTitle);
}
