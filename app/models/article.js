'use strict';

module.exports = function(sequelize, DataTypes) {

	var Article = sequelize.define('Article', {
			title: DataTypes.STRING,
			content: DataTypes.TEXT,
			isPrivate: DataTypes.BOOLEAN,
			eventDate: DataTypes.DATEONLY,
			eventTime: DataTypes.TIME
		},
		{
			associate: function(models){
				Article.belongsTo(models.User);
				Article.hasMany(models.Attendee);
			}
		}
	);

	return Article;
};
