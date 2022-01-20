class RonSwanson extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }
  set img({ src, alt }) {
    this.root.innerHTML += `
    <style>
      figure {
        margin: 1rem;
        padding: 0;
      }
      img {
        max-width: 100%;
      }
    </style>
    <figure>
      <img src="${src}" alt="${alt}" />
    </figure>`;
  }

  set content(content) {
    this.root.innerHTML += `
    <style>
      q {
        font-style: italic;
      }
      q::before {
        content: '';
      }
      q::after {
        content: '';
      }
    </style>
    <q>${content}</q>`;
  }
}

customElements.define('ron-swanson', RonSwanson);
