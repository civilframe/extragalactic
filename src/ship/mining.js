require('../javascript.js');
var constants = require('../constants.js');
var common =    require('../common.js');
var _ = 		require('underscore-node');
var time =      require('../time/time.js');
var cargo =     require('./cargo.js');

exports.hasMiningCapability = function(ship) {
    return _.some(ship.subsystems, function(subsystem) {
        return subsystem.type == constants.subsystemType.MINING_LASER
            && subsystem.health > 0;
    });
};

exports.createMiningJob = function (ship) {
    return {
        type: constants.jobType.MINING,
        owner: ship,
        place: ship.position.place,
        progress: function(ticks) {
            var ore = {
                volume: ticks*10,
                name: 'Iron Ore',
                stackable: true
            };

            // check: ship is still in the place it started mining
            // check: ship still has mining capability
            // check: ship still has cargo capacity for more ore
            if (this.place != ship.position.place || !exports.hasMiningCapability(ship) || !cargo.hasCapacityFor(ore, ship)) {
                ship.jobs.remove(this);
                time.stopJob(this);

                // add interrupt for full cargoholds
                if (!cargo.hasCapacityFor(ore, ship)) {
                    var interrupt = {
                        process: function() {
                            common.out('Your mining lasers power down since your cargoholds cannot store additional ore.')
                        }
                    };
                    time.addInterrupt(interrupt)
                }
                return;
            }

            // add ore to cargo
            cargo.addItem(ore, ship);
        }
    };
};
