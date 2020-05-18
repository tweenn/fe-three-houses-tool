export default function (origin, path, value) {
	
	path = path.split('.');

	const length = path.length;
	let current = origin;

	// Loop through the path
	path.map((pathKey, pathIndex) => {
		if (pathIndex === length -1) {
			current[pathKey] = value;
		}
		else {
			if (!current[pathKey]) {
				current[pathKey] = {};
			}
			current = current[pathKey];
		}
	});
};
