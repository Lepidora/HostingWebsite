/*
 * Unit tests for the storage.js controller
 */

var expect = require('chai').expect;

var storage = require('../../src/controllers/storage');

describe('Storage controller', tests);

function tests() {
	
	generateID();
	
}

function generateID() {
	
	it('Should return an empty string when given a length of 0', function() {
		var id = storage.generateID(0);
		expect(id).to.equal("");
	});
	
	it('Should return a string of the given length', function() {
		
		for (var length = 1; length <= 5; length++) {
			var id = storage.generateID(length);
			expect(id.length).to.equal(length);
		}
		
	});
}