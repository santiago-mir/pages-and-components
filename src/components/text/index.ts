export function initText() {
  class CustomText extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const variant = this.getAttribute("variant");
      const div = document.createElement("div");
      div.textContent = this.textContent;
      const style = document.createElement("style");
      style.innerHTML = `

        .large-title, .medium-title, .small-title, .body{
          font-family: "Poppins";
        }

        .large-title{
          font-size: 52px;
          font-weight: 900;
        }
        .medium-title{
          font-size: 38px;
          font-weight: 700;
        }
        .small-title{
          font-size: 22px;
          font-weigth:500;
        }

        .body{
          font-size: 18px;
          font-weight: 400;
        }
        }
      `;
      div.className = `${variant}`;
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("text-custom", CustomText);
}
