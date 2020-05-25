import namespaceInitializer from './handlers/namespace-initializer.js';
import databaseStarter from './handlers/database-starter.js';
import dataRetriever from './handlers/data-retriever/index.js';
import dataProcessor from './handlers/data-processor.js';
import renderTemplate from './handlers/render-template.js';

$( document ).ready(function() {
	
	namespaceInitializer()
	.then(databaseStarter)
	.then(dataRetriever)
	.then(dataProcessor)
	.then(renderTemplate);
});
