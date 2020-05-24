import { h, Component, render } from '../vendor/preact.module.min.js';
import htm from '../vendor/html.module.min.js';

const html = htm.bind(h);

import Character from './character.class.js';
import Form from './form.class.js';

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			characters: window.feth.data.processed,
			filters: {
				route: '',
				house: '',
				supportLevel: ''
			}
		};

		const context = this;
		window.updateApp = (newData) => {
			context.setState(newData);
			console.log(context.state);
		};
	}

	mansoryIt() {
		window.clearTimeout(window.feth.timers.mansory);
		window.feth.timers.mansory = setTimeout(() => {
			// Mansory Fix for FlexboxGrid
			const target = $('.entry');
			target.css('width', target.css('maxWidth'));

			// Mansor'it!
			const app = $('#app');
			if (app.data('masonry')) {
				app.masonry('destroy');
			}
			app.masonry({
				itemSelector: '.entry',
				columnWidth: '.entry',
				percentPosition: true
			});
		}, 150);
	}

	componentDidMount() {
		this.mansoryIt();
	}

	componentDidUpdate() {
		this.mansoryIt();
	}

	filterCharacters = () => {
		const filters = this.state.filters;
		const characters = { ...this.state.characters };

		Object.keys(characters).filter((characterKey) => {
			let willRender = true;
			if ((filters.route !== '') && (characters[characterKey].routeLimitation)) {
				if ((characters[characterKey].routeLimitation !== filters.route)) {
					willRender = false; 
				}
			}

			return !willRender;
		}).map((filteredKey) => {
			delete(characters[filteredKey]);
		});

		return characters;
	}

	render(props, state) {
		const characters = this.filterCharacters();
		const filters = state.filters;

		return html`<div id="app" class="row">
			<div id="form-wrapper" class="col-xs-12">
				${html`<${Form}
					filters="${filters}"
				/>`}
			</div>
			<div id="character-wrapper" class="col-xs-12">
				<div class="row">
					${(() => {
						return Object.keys(characters).map((character) => {
							return html`<${Character}
								name="${character}"
								entry="${characters[character]}"
								characters="${characters}"
							/>`;
						});
					})()}
				</div>
			</div>
		</div>`;
	}
};
