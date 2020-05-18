import { h, Component, render } from '../vendor/preact.module.min.js';
import htm from '../vendor/html.module.min.js';

const html = htm.bind(h);

export default class Select extends Component {

	componentDidMount() {
		const target = $('#'+this.props.id);
		
		target.select2();
		target.on('select2:select', (event) => {
			this.props.onChangeFunction(event);
		});
	}

	render(props, state) {
		const id = props.id;
		const title = props.title || 'No title';
		const value = props.value;
		const options = props.options;

		return html`
			<label for="${id}"
				class="width-100 text-left"
			>
				${title}
			</label>
			<br />
			<select id="${id}"
				value="${value}"
				onChange=${props.onChangeFunction}
				class="width-100 text-left"
			>
				<option value="">All</option>
				${(() => {
					return Object.keys(options).map((optionKey) => {
						return html`<option value="${optionKey}">
							${options[optionKey]}
						</option>`
					});
				})()}
			</select>`;
	}
};
