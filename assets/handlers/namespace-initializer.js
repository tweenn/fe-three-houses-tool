
export default () => {
	window.feth = {
		data: {
			processed: {},
			original: {
				characters: [],
				charactersImage: {},
				charactersSupportLevels: {},
				houses: {},
				housesBanner: {},
				housesAffiliations: {},
				routes: {},
				routesExclusiveCharacters: {}
			}
		},
		database: {
			connector: {},
			name: 'fire-emblem-th',
			data: {
				original: [],
				processed: {}
			}
		}
	};

	return new Promise((resolve, reject) => {
		resolve(true);
	});
};
