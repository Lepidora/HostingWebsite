/**
 * Controller for handling file storage
 */

const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const idLength = 7;

module.exports.generateID = function() {
	
	var id = "";
	
	for (var index = 0; index < idLength; index++) {
		
		var characterPosition = Math.floor(Math.random() * characters.length);
		var character = characters[characterPosition];
		
		id += character;
	}
	
	return id;
};