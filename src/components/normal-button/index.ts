export function initButton(content:string) {
  class CustomButton extends HTMLElement {
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
            background-color: pink;
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
  customElements.define("button-custom", CustomButton);
}
