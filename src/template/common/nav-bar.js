import { html, PolymerElement } from "@polymer/polymer/polymer-element";
import "@polymer/app-layout/app-toolbar/app-toolbar";
import "@polymer/app-layout/app-header/app-header";
import "@polymer/paper-styles/paper-styles";

import "@polymer/paper-button/paper-button";

/**
 * @customElement
 * @polymer
 */
class NavBar extends PolymerElement {
  static get template() {
    return html`
      <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          display: block;
        }
        app-header {
          height: 60px;
          font-size: 36px;
          box-shadow: -2px 5px 3px -3px rgba(0, 0, 0, 0.4);
        }
        a{
          text-decoration: none;
          font-family: 'Text Me One', sans-serif;
          margin: 0px 20px;
        }
        a:visited{
        text-decoration: none;
        }
      </style>
      <app-header slot="header">
        <app-toolbar class="layout horizontal center-center">
            <a href="/home">/Home</a>
            <a href="/about">/About</a>
            <a href="/contact">/Contact</a>
        </app-toolbar>
      </app-header>
    `;
  }

  ready() {
    super.ready();
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.crossOrigin = "anonymous";
    link.href =
      "https://fonts.googleapis.com/css?family=Text+Me+One";
    document.head.appendChild(link);
  }
}

window.customElements.define("nav-bar", NavBar);
