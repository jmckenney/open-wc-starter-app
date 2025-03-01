import { LitElement, html, css } from 'lit-element';
import { openWc } from './open-wc-logo';
import './wc-with-styles';

class MyApp extends LitElement {
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
          color: #1a2b42;
        }

        header {
          margin: auto;
        }

        svg {
          animation: app-logo-spin infinite 20s linear;
        }

        a {
          color: #217ff9;
        }

        .app-footer {
          color: #a8a8a8;
          font-size: calc(10px + 0.5vmin);
        }

        @keyframes app-logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <header class="app-header">
        ${openWc}
        <h1>${this.title}</h1>
        <p>Edit <code>src/my-app.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/developing/#examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </header>
      <p class="app-footer">
        🚽 Made with love by
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-wc">open-wc</a>.
      </p>
      <wc-with-styles></wc-with-styles>
    `;
  }
}

customElements.define('my-app', MyApp);
