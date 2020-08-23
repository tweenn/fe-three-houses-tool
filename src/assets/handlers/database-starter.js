
export default () => {
	const dbName = window.feth.database.name;
	window.feth.database.connector = new PouchDB(dbName, {
		revs_limit: 2
	});

	return true;
}

/*
db.put({
	_id: 'Byleth (M)|Edelgard',
	support: 'B'
});
*/
