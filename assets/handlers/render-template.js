
import { h, Component, render } from '../vendor/preact.module.min.js';
import htm from '../vendor/html.module.min.js';

import App from '../components/app.class.js';

const html = htm.bind(h);

export default () => {
	render(html`<${App} />`, document.body);
}
