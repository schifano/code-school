 // Controllers - where we define behavior by defining functions and values.
// Wrapping JavaScript in a closure
(function() {
	// Module	Angular JS     App Name Dependencies
	var app = angular.module('store', []);
	// Create controller, always name with uppercase
	// Pass an anonymous function 
	app.controller('StoreController', function() {
		// Set property of controller to gem
		this.products = gems;
	});
	// JS object
	var gems = [
		{
			name: 'Dodecahedron',
			images: [
				{
					full: 'images/dodecahedron-full.png',
					thumb: 'images/dodecahedron-thumb.png'
				}
			],
			price: 2,
			description: '. . .',
			canPurchase: true,
			soldOut: false, // if sold out, don't show product on page, duh.
		},
		{
			name: 'Pentagonal Gem',
			images: [
				{
					full: 'images/pentagonal-full.png',
					thumb: 'images/pentagonal-thumb.png'
				}
			],
			price: 5.95,
			description: '. . .',
			canPurchase: true,
			soldOut: false,
		}
	];
})();