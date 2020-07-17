/**
 * Controller for handling file storage
 */

const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

module.exports.generateID = function(length) {
	
	var id = "";
	
	for (var index = 0; index < length; index++) {
		
		var characterPosition = Math.floor(Math.random() * characters.length);
		var character = characters[characterPosition];
		
		id += character;
	}
	
	return id;
};