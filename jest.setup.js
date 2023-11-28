import { config } from '@vue/test-utils';
import StubCustomElementsPlugin from '.';

config.plugins.VueWrapper.install(StubCustomElementsPlugin);

// Simulate registering custom elements
customElements.define('my-custom-element', class extends HTMLElement {});
customElements.define('my-other-element', class extends HTMLElement {});
