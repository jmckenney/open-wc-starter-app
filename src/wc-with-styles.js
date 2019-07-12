import { LitElement, html, css } from 'lit-element';

class WcWithStyles extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'open-wc';
  }

  static get styles() {
    return [
      css`
        :host {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
        }
        h1 {
          background-color: var(--my-var, pink);
        }
      `,
    ];
  }

  render() {
    return html`
        <h1>THIS SHOULD NOT BE PINK :) ${this.title}</h1>
    `;
  }
}

customElements.define('wc-with-styles', WcWithStyles);
