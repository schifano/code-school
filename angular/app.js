// Controllers - where we define behavior by defining functions and values.
// Wrapping JavaScript in a closure
(function() {
	// Module	Angular JS     App Name Dependencies
	var app = angular.module('store', ['store-products']);
	// Create controller, always name with uppercase
	// Pass an anonymous function 
	app.controller('StoreController', function() {
		// Set property of controller to gem
		this.products = gems;
	});

	// Services
	// app.controller('StoreController', ['$http', function($http) {
	// 	// Set property of controller to gem
	// 	var store = this;
	// 	store.products = [];
	// 	$http.get('/products.json').success(function(data) {
	// 		store.products = data;
	// 	});
	// }]);

	app.controller('ReviewController', function() {
		// Initialize review arrray
		this.review = {};

		this.addReview = function(product) {
			// push the controller's review onto the review array
			product.reviews.push(this.review);
			// reset review fields
			this.review = {};
		};
	}); // end ReviewController

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
			reviews: [
				{
					stars: 5,
					body: 'I love this product!',
					author: 'bear@beary.net'
				},
				{
					stars: 1,
					body: 'This product sucks.',
					author: 'ooni@corn.com'
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
})(); // end JS function