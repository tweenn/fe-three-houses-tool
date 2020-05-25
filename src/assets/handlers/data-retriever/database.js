
export default () => {
	const connector = window.feth.database.connector;

	return connector.allDocs()
	.then((allDocsAnswer) => {

		if (allDocsAnswer.total_rows <= 0) {
			return true;
		}

		return Promise.all(allDocsAnswer.rows.map((entry) => {
			return connector.get(entry.id);
		}))
		.then((allRowsData) => {
			window.feth.database.data.original = allRowsData;
		});
	});
};
