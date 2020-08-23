import { h, Component, render } from '../vendor/preact.module.min.js';
import htm from '../vendor/html.module.min.js';

const html = htm.bind(h);

import makeImagePath from '../handlers/make-image-url.js';

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
		const imageURL = makeImagePath(`photos/${characters[charName].img}`, { w: '80px' });
		const levels = [...character.levels].concat(['', '', '', '']).splice(0, 4);
		const currentLevel = character.current;
		const nameShouldHighlight = character.current?.support ? 'highlight' : '';
		
		const affiliation = characters[charName].affiliation.title;
		const affiliationImageURL = makeImagePath(`${characters[charName].affiliation.img}`, { h: '40px' });

		if (character.levels[0] === 'S') {
			levels.sort();
		}

		return html`<div class="row middle-xs margin-0 position-relative">
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
				<h3 class="title margin-0 ${nameShouldHighlight}">
					${charName}
				</h3>
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
			<div class="footer-frame"
				style="background-image: url('${makeImagePath('footer-circle.svg', { h: '4px' })}')"
			>
			</div>
		</div>`;
	}
};
