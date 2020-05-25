
import put from '../put-into-object-by-path.js';

var getJson = (jsonPath, dataPath) => {
	return $.get(jsonPath)
	.done((response) => {
		put(window, dataPath, response);
		return response;
	});
}

/**
 * Data extructure example
 */
// processed: {},
// original: {
// 	characters: [],
// 	charactersImage: {},
// 	charactersSupportLevels: {},
// 	houses: {},
// 	housesBanner: {},
// 	housesAffiliations: {},
// 	routes: {},
// 	routesExclusiveCharacters: {}
// }

export default () => {

	return Promise.all([
		getJson('./data/characters/characters.json', 'feth.data.original.characters'),
		getJson('./data/characters/characters-image.json', 'feth.data.original.charactersImage'),
		getJson('./data/characters/characters-support-levels.json', 'feth.data.original.charactersSupportLevels'),
		getJson('./data/houses/houses.json', 'feth.data.original.houses'),
		getJson('./data/houses/houses-banner.json', 'feth.data.original.housesBanner'),
		getJson('./data/houses/houses-affiliations.json', 'feth.data.original.housesAffiliations'),
		getJson('./data/routes/routes.json', 'feth.data.original.routes'),
		getJson('./data/routes/routes-exclusive-characters.json', 'feth.data.original.routesExclusiveCharacters'),
	]);
}
