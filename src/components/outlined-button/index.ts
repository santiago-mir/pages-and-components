export function initOutlinedButton(content: string) {
  class CustomOutlinedButton extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const labelEl = this.getAttribute("label");
      const style = document.createElement("style");
      style.innerHTML = `
          .root{
              height: 65px;
              display: flex;
              justify-content: center;
          }
          .button{
              background-color: white;
              border: solid 3px;
              flex-grow: 1;
              max-width: 450px;
              font-size: 22px;
              font-family: "Poppins";
              font-weight: 500;
          }
          
          `;

      const div = document.createElement("div");
      div.classList.add("root");
      div.innerHTML = `
          <button class="button"><span>${content}</span></button>
          `;
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("outlined-button-custom", CustomOutlinedButton);
}
