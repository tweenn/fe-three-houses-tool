
import web from './web.js';
import database from './database.js';

export default () => {
	return web()
	.then(database);
}
