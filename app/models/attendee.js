'use strict';

module.exports = function(sequelize, DataTypes) {

	var Attendee = sequelize.define('Attendee', {

		},
		{
			associate: function(models){
				Attendee.belongsTo(models.User);
			}
		}
	);

	return Attendee;
};
