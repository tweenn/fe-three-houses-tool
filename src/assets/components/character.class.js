import { h, Component, render } from '../vendor/preact.module.min.js';
import htm from '../vendor/html.module.min.js';

const html = htm.bind(h);

import makeImagePath from '../handlers/make-image-url.js';

import Relationship from './relationship.class.js';

export default class Character extends Component {
	render(props, state) {
		const characters = props.characters;

		const imageURL = makeImagePath(`photos/${props.entry.img}`, { w: '60px' });
		const charName = props.name;
		const relationships = props.entry.supportLevels;

		return html`<div class="entry col-sm-12 col-md-6 col-lg-4 col-xl-3">
			<div class="box">
				<div class="header">
					<img src="${imageURL}" alt="Image for ${charName}" />
					<h1 class="title">${charName}</h1>
					<div class="bg-triangle"></div>
				</div>
				<div class="relationships">
					${(() => {
						return relationships.filter((character) => {
							return characters[character.name];
						})
						.map((character) => {
							return html`<${Relationship}
								currentCharacter="${character}"
								mainCharacter="${charName}"
							/>`;
						});
					})()}
				</div>
			</div>
		</div>`;
	}
};
