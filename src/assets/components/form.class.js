import { h, Component, render } from '../vendor/preact.module.min.js';
import htm from '../vendor/html.module.min.js';

const html = htm.bind(h);

import Select from './selects.class.js';

export default class Form extends Component {

	constructor() {
		super();
		this.state = {};
	}

	onChange = (event) => {
		const filters = {
			route: this.props.filters.route,
			house: this.props.filters.house,
			supportLevel: this.props.filters.supportLevel
		}
		filters[event.target.id] = event.target.value;

		window.updateApp({filters});
	}

	render(props, state) {

		const route = props.filters.route || '';
		const house = props.filters.house || '';
		const supportLevel = props.filters.supportLevel || '';

		const supportLetters = {
			C: 'C',
			B: 'B',
			A: 'A',
			S: 'S'
		}

		return html`<div class="row center-xs">
			<div class="col-lg-8 col-md-10 col-xs-12">
				<div class="row">
					<div class="col-md-3 col-xs-6">
						${html`<${Select}
							title="Route"
							id="route"
							value="${route}"
							onChangeFunction="${this.onChange}"
							options="${window.feth.data.original.routes}"
						/>`}
					</div>
					<div class="col-md-3 col-xs-6">
						${html`<${Select}
							title="House"
							id="house"
							value="${house}"
							onChangeFunction="${this.onChange}"
							options="${window.feth.data.original.houses}"
						/>`}
					</div>
					<div class="col-md-3 col-xs-6">
						${html`<${Select}
							title="Support Level"
							id="supportLevel"
							value="${supportLevel}"
							onChangeFunction="${this.onChange}"
							options="${supportLetters}"
						/>`}
					</div>
				</div>
			</div>
		</div>`;
	}
};
