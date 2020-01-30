/**
 * Copyright 2019 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import {
  LitElement,
  html,
  css
} from "lit-element/lit-element.js";
// import "@lrnwebcomponents/elmsln-loading/elmsln-loading.js";
/**
 * `glossary-term`
 * `Glossary term that shows a popup for the answer`
 * @demo demo/index.html
 * @customElement glossary-term
 */
class NewsService extends LitElement {
  // styles function
  static get styles() {
    return [
      css`
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none;
        }
      `
    ];
  }

  // render function
  render() {
    return html`
      ${this.loading
        ? html`
            Loading...
          `
        : ""}
      ${this.items.map(
        item =>
          html`
            <p>
              <a href="${item.url}" target="_blank">${item.title}</a>
            </p>
          `
      )}
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,
      endpoint: {
        type: String
      },
      tag: {
        type: String
      },
      items: {
        type: Array
      },
      loading: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.endpoint = "";
    this.tag = "";
    this.items = [];
    this.loading = false;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (["endpoint", "tag"].includes(propName)) {
        this.__endpointMethodChanged(this.endpoint, this.tag);
      }
    });
  }

  __endpointMethodChanged(endpoint, tag) {
    this.loading = true;
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query { news(tag: "${this.tag}") { author title description url urlToImage publishedAt content source { id name } } }`
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.data.news) {
          console.log("res.data.news:", res.data.news);
          this.items = res.data.news;
        }
      })
      .finally(() => (this.loading = false));
  }

  /**
   * convention
   */
  static get tag() {
    return "news-service";
  }
}

export { NewsService };
