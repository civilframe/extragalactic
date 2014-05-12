var shipNameGenerator = require('../generation/shipNameGenerator.js');
var timeModule = require('../time/time.js');
var _ = require('underscore-node');

exports.main = {
	context: 'init'
};

exports.startNew = function() {
	var newGame = {
		time: timeModule.time,
		player: {
			ship: {
				name: shipNameGenerator.shipName(),
				description: 'A small transport vessel from the age of The Fourth Insurrection. Boasts a spacious cargo hold and light armor.',
				health: 1450,
				maxHealth: 1450,
				subsystems: [
					{
						type: 'mining laser',
						description: 'Dalton ML-1300',
						health: 100,
						maxHealth: 100,
						properties: [{miningPower: 12}]	
					},
					{
						type: 'sublight engine',
						description: 'Quicksilver Dasher',
						health: 250,
						maxHealth: 250,	
						properties: [{thrustPower: 45}]	
					},
					{
						type: 'cargohold',
						description: 'Standard Cargo',
						health: 500,
						maxHealth: 500,
						properties: [{cargoCapacity: 300}]	
					},
				]
			}
		},
		context: 'init'
	};

	exports.main = newGame;
};