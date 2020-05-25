import { h, Component, render } from '../vendor/preact.module.min.js';
import htm from '../vendor/html.module.min.js';

const html = htm.bind(h);

export default class RelationshipLevels extends Component {

	onClick = (event) => {
		const maxLevel = this.props.level;
		const level = this.props.level.replace('+', '');
		const currentLevel = (this.props.currentLevel || { support: '' }).support;

		if (level !== '') {
			let newLevel = '';

			if (level !== currentLevel.replace('+', '')) {
				newLevel = level;
			} else if (level !== maxLevel) {
				newLevel = maxLevel;
			}

			if (newLevel !== '') {
				this.updateSupportLevelInDB(newLevel)
				.then(this.updateSupportLevelInApp)
			}
		}
	}

	updateSupportLevelInDB = (newLevel) => {
		const db = window.feth.database.connector;

		const mainCharacter = this.props.mainCharacter;
		const currentCharacter = this.props.currentCharacter;

		const currentLevel = this.props.currentLevel || {
			support: newLevel,
			_id: [currentCharacter, mainCharacter].sort().join('|')
		};

		currentLevel.support = newLevel;

		return db.put(currentLevel);
	}

	updateSupportLevelInApp = (answer) => {
		if (answer.ok) {
			delete(answer.ok);

			const mainCharacter = this.props.mainCharacter;
			const currentCharacter = this.props.currentCharacter;
			
			const processedData = { ...window.feth.data.processed};

			processedData[mainCharacter].supportLevels = processedData[mainCharacter].supportLevels.map((supportEntry) => {
				if (supportEntry.name === currentCharacter) {
					supportEntry.current = answer;
				}
				return supportEntry;
			});

			processedData[currentCharacter].supportLevels = processedData[currentCharacter].supportLevels.map((supportEntry) => {
				if (supportEntry.name === mainCharacter) {
					supportEntry.current = answer;
				}
				return supportEntry;
			});

			window.updateApp({
				characters: processedData
			});
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
