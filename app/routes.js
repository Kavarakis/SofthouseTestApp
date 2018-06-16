import path from 'path';
let root = `${path.dirname(require.main.filename)}`

module.exports = function (app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.post('/api/write', (req, res) => {
		require('../scripts/writeJSON')(req, res)
	});
	app.get('*', function (req, res) {
		res.sendFile(root + '/public/index.html');
	});

};