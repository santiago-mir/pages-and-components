export function initSelectInput() {
  class CustomSelectInput extends HTMLElement {
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
        heigth: 60px;
        display: flex;
        flex-direction: column;
    }
    .label{
        font-size: 18px;
    }
    .input{
        margin-top: 3px;
        border: solid 2px black;
        border-radius: 4px;
        padding: 17px 13px;
        font-size:18px;
    }
      `;

      const div = document.createElement("div");
      div.classList.add("root");
      div.innerHTML = `
      <label class="label">${labelEl}</label>
      <select class="input" name="" id=""> 
      <option value="1">1</option>
      <option value="1">2</option>
      <option value="1">3</option>
      </select>
      `;
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("select-custom", CustomSelectInput);
}
