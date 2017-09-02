
/*
 * GET home page.
 */

exports.render = function(req, res) {
	res.render('index', { title: 'File Hosting' });
};