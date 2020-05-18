
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
	const original = window.feth.data.original;
	const processed = window.feth.data.processed;
	const databaseOriginal = window.feth.database.data.original;
	const databaseProcessed = window.feth.database.data.processed;

	databaseOriginal.map((supportEntry) => {
		// Using redundancy here so it's easier to
		// Update the database in the future
		databaseProcessed[supportEntry._id] = supportEntry;
	});

	original.characters.map((character) => {
		const houseId = Object.keys(original.housesAffiliations).filter((houseKey) => {
			return original.housesAffiliations[houseKey].indexOf(character) >= 0;
		})[0] || 'church';

		const routeId = Object.keys(original.routesExclusiveCharacters).filter((routeKey) => {
			return original.routesExclusiveCharacters[routeKey].indexOf(character) >= 0;
		})[0] || false;

		const supportLevels = [];
		Object.keys(original.charactersSupportLevels).map((entryKey) => {
			if (entryKey.indexOf(character) >= 0) {
				supportLevels.push({
					name: entryKey.replace(character, '').replace('|', ''),
					levels: original.charactersSupportLevels[entryKey],
					// AKA Database Data
					current: databaseProcessed[entryKey]
				});
			};
		});

		processed[character] = {
			img: original.charactersImage[character],
			supportLevels: supportLevels,
			affiliation: {
				id: houseId,
				title: original.houses[houseId],
				img: original.housesBanner[houseId]
			},
			routeLimitation: routeId
		};
	});
};
