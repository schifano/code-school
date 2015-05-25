 // Controllers - where we define behavior by defining functions and values.
// Wrapping JavaScript in a closure
(function() {
	// Module	Angular JS     App Name Dependencies
	var app = angular.module('store', []);
	// Create controller, always name with uppercase
	// Pass an anonymous function 
	app.controller('StoreController', function() {
		// Set property of controller to gem
		this.product = gem;
	});
	// JS object
	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
	}
})();