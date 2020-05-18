import { h, Component, render } from '../vendor/preact.module.min.js';
import htm from '../vendor/html.module.min.js';

const html = htm.bind(h);

export default class RelationshipLevels extends Component {

	onClick = (event) => {
		const maxLevel = this.props.level;
		const level = this.props.level.replace('+', '');
		const currentLevel = this.props.currentLevel;
		const currentCharacter = this.props.currentCharacter;
		const mainCharacter = this.props.mainCharacter;

		if (level !== '') {

			// If same letter
			if (level === currentLevel.replace('+', '')) {
				if (currentLevel === maxLevel) {
					// SET MINOR LEVEL
				} else {
					// SET MAJOR LEVEL
				}
			} else {
				// SET MINOR LEVEL
			}
			
			console.log(event, this.props);
		}
	}

	render(props, state) {
		const level = props.level.replace('+', '');
		const currentLevel = props.currentLevel;
		
		return html`<a
			class="letter ${level === '' ? 'hidden' : ''}"
			${level === '' ? 'aria-hidden="true"' : ''}
			onClick="${this.onClick}"
		>
			${level !== '' ? level : 'E'}
		</a>`;
	}
};
