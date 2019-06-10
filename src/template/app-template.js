import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

import "@polymer/app-layout/app-drawer-layout/app-drawer-layout";
import "@polymer/app-layout/app-header-layout/app-header-layout";
import "@polymer/iron-flex-layout/iron-flex-layout-classes";

import './common/nav-bar';

/**
 * `app-template` Defines application structure
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class AppTemplate extends PolymerElement {
  static get properties() {
    return {};
  }

  static get template() {
    return html`
      <style
        is="custom-style"
        include="iron-flex iron-flex-alignment  iron-positioning"
      ></style>
      <style>

       .content{
         margin: 50px auto;

       }
       
      </style>
      <!--
        These templates works similar to handlbar or Twig.
      -->
      <app-drawer-layout fullbleed force-narrow="true">
        <app-header-layout>
          <nav-bar></nav-bar>

          <div class="layout horizontal">
            <div class="content"><slot name="content"></slot></div>
          </div>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
    super.ready();
  }
}

customElements.define("app-template", AppTemplate);
