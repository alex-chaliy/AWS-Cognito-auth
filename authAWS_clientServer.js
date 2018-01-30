
/** @help : Deploy Angular 2 App - with non-hash strategy
 * https://stackoverflow.com/a/34864585
*/

'use strict';

const config = require('./authAWS_clientServer.config');

const express = require('express');
const app = express();

const server = app.listen(
	config.server.port,
	() => {
		console.log(
			'Server listening at ' +
			config.server.protocol +
			config.server.address +
			':' + config.server.port);
	}
);

/*******
* Routes *
********/

/** 
 * @info: Get Client Dist Files 
 */
app.use('/dist', express.static(__dirname + '/dist'));

app.use('/', (req, res) => {
	console.log('\n • Non-Api request --> ' + req.originalUrl);

	res.status(200).sendFile(__dirname + '/dist/index.html');
	console.log('\n sent index.html');
	return;
});

