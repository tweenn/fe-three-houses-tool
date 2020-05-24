import { h, Component, render } from '../vendor/preact.module.min.js';
import htm from '../vendor/html.module.min.js';

const html = htm.bind(h);

import RelationshipLevels from './relationship-levels.class.js';

export default class Relationship extends Component {
	render(props, state) {
		// Full list of information
		const characters = window.feth.data.processed;
		
		// Main Character
		const mainCharacter = props.mainCharacter;

		// Current Character
		const character = props.currentCharacter;
		const charName = character.name;
		const imageURL = `./img/photos/${characters[charName].img}`;
		const levels = character.levels;
		const currentLevel = character.current;

		// Hotfix for missing S support
		if (levels.length < 4) {
			levels.push('');
		}
		levels.push('');

		return html`<div class="row middle-xs margin-0">
			<div class="col-xs-3">
				<img src="${imageURL}" alt="Image for ${charName}" />
			</div>
			<div class="col-xs-6">
				<h3 class="title margin-0">${charName}</h3>
			</div>
			<div class="col-xs-3 display-flex">
				${(() => {
					return levels.map((level) => {
						return html`<${RelationshipLevels}
							level="${level}"
							currentLevel="${currentLevel}"
							mainCharacter="${mainCharacter}"
							currentCharacter="${charName}"
						/>`;
					});
				})()}
			</div>
		</div>`;
	}
};
