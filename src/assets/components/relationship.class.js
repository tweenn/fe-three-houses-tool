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
		
		const affiliation = characters[charName].affiliation.title;
		const affiliationImageURL = `./img/${characters[charName].affiliation.img}`;

		// Hotfix for missing S support
		if (levels.length < 4) {
			levels.push('');
		}
		levels.push('');

		return html`<div class="row middle-xs margin-0">
			<div class="col-xs character-imagery">
				<div class="line-divider"></div>
				<div class="image-wrapper">
					<div class="zoom-box">
						<img src="${imageURL}" alt="Image for ${charName}" />
					</div>
					<img src="${affiliationImageURL}" alt="Image for ${affiliation}" />
				</div>
				<div class="line-divider"></div>
			</div>
			<div class="col-xs character-name">
				<div class="diamond-wrapper"><div class="diamond"></div></div>
				<h3 class="title margin-0">${charName}</h3>
			</div>
			<div class="col-xs display-flex character-support-level">
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
