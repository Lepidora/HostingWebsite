/*
 * Routing for pages
 */

var index = require('./routes/index')
  , pages = require('./routes/pages');

module.exports = function(app) {
	
	app.get('/', index.render);
	app.get('/download', pages.download);
	app.get('/upload', pages.upload);
};