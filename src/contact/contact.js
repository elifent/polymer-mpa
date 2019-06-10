import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

import "../template/app-template";

import "@polymer/paper-input/paper-input";
import "@polymer/paper-button/paper-button";
import "@polymer/iron-ajax/iron-ajax";

/**
 * `contact-page` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class ContactPage extends PolymerElement {
  static get properties() {
    return {
      name: {
        type: String,
        value: null
      },
      email: {
        type: String,
        value: null
      },
      message: {
        type: String,
        value: null
      },
      payload:{
          type: Object,
          value: null
      }
    };
  }

  static get template() {
    return html`
      <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          font-family: "Text Me One", sans-serif;
          font-size: 22px;
        }
        paper-button {
          background: var(--paper-red-900);
          color: #ffffff;
          height: 50px;
          text-transform: none;
          font-family: "Text Me One", sans-serif;
          margin-left: 0px;
        }
        .content {
          width: 600px;
        }
      </style>
      <app-template>
        <div slot="content" class="content">
          <paper-input label="Name" value="{{name}}"></paper-input>
          <paper-input label="Email" value="{{email}}"></paper-input>
          <paper-input label="Message" value="{{message}}"></paper-input>
          <paper-button raised on-click="sendMessage">Send Message</paper-button>
        </div>
      </app-template>

      <iron-ajax
        id="message"
        method="POST"
        url="/api/message"
        loading="{{loading}}"
        body="{{payload}}"
        content-type="application/json"
        handle-as="json"
        on-response="handleResponse"
      ></iron-ajax>

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

  sendMessage(){
      this.payload = {
          name: this.name,
          email: this.email,
          message: this.message
      }
      this.$.message.generateRequest();
  }

  handleResponse(e){
    const response = e.detail.response;
    console.log(response);
  }
}

customElements.define("contact-page", ContactPage);
