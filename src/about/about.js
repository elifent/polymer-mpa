import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '../template/app-template';

/**
 * `home-page` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class AboutPage extends PolymerElement {
    static get properties() {
        return {
            page:{
                type: String,
                value: "About"
            }
        }
    }

    static get template() {
        return html`
            <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
            <style>
                :host{
                    font-family: 'Text Me One', sans-serif;
                    font-size: 22px;
                }
            </style>
           <app-template>
                <div slot="content" >
                    Hello from {{page}}
                </div>
           </app-template>
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

customElements.define('about-page', AboutPage);