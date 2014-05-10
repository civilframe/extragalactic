var context = require('./commandContext.js');
var common = require('./../common.js');
var _ = require('underscore-node');
var colors = require('colors');

function describeShip(ship) {
	common.out('The "' + ship.name + '"');
	common.out('------------------------------------------------')
	common.out(ship.description);
	common.out('');
	common.out('Subsystems:');
	_.each(ship.subsystems, function(subsystem) {
		common.out('  ' 
			+ subsystem.description 
			+ ' (' + subsystem.type + ')' 
			+ ' [' + common.healthBar(subsystem) + ']'
			);
	});
}

exports.applies = function(input, game) {
	if (!context.includes('main')) return false;
	return (input == 'ship');
};

exports.execute = function(input, game) {
	describeShip(game.player.ship);
};