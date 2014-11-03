var common = 		require('./../../common.js');
var navigation = 	require('./../../navigation/navigation.js');
var game =			require('./../../game/game.js');

exports.execute = function(input) {
    var playerShip = game.main.player.ship;
    var canWarp = navigation.canWarp(playerShip);
    if (!canWarp) {
        common.out('Your ship cannot warp at this time.');
        return;
    }

	var words = input.split(' ');
	var beacon = words[2];
    var place = navigation.translateBeacon(beacon, playerShip);
	if (place == null) {
		common.out('The navigation console outputs:');
		common.out('  ERROR 134: BEACON NOT FOUND');
        return;
	}
    if (place == playerShip.position.place) {
        common.out('You are already at that location.');
    }
	else {
        navigation.warpTo(beacon, playerShip);

        common.out('The warp drive begins to hum in anticipation, as the ship ' +
				   'gives a brief shudder, followed by the groaning of metal. ' +
				   'A bright flash fills your vision, then subsides as the ship ' +
                   'enters the void of warpspace.');
	}
};