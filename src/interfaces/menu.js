var common = require('./../common.js');

exports.show = function() {
	common.out(
		'\n-------------------------------------------------------------\n' +
		'           _                         _            _   _      ' + '\n' +
		'          | |                       | |          | | (_)     ' + '\n' +
		'  _____  _| |_ _ __ __ _  __ _  __ _| | __ _  ___| |_ _  ___ ' + '\n' +
		' / _ \\ \\/ / __| `__/ _` |/ _` |/ _` | |/ _` |/ __| __| |/ __|' + '\n' +
		'|  __/>  <| |_| | | (_| | (_| | (_| | | (_| | (__| |_| | (__ ' + '\n' +
		' \\___/_/\\_\\\\__|_|  \\__,_|\\__, |\\__,_|_|\\__,_|\\___|\\__|_|\\___|' + '\n' +
		'                          __/ |                              ' + '\n' +
		'                         |___/        						  ' + '\n' +
		'-------------------------------------------------------------\n'
	);

	common.out('     - ' + 'Start'.cyan + ' New Game');
	common.out('     - ' + 'Load'.cyan + ' Previous Game');
	common.out('     - ' + 'Exit'.cyan + '\n');
};