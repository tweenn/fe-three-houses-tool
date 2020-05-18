
export default () => {
	const dbName = window.feth.database.name;
	window.feth.database.connector = new PouchDB(dbName);

	return true;
}

/*
db.put({
	_id: 'Byleth (M)|Edelgard',
	support: 'B'
});
*/
