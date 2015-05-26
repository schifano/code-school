(function() {
	var app = angular.module('store-products',[ ]); 
	// Custom Directive
	app.directive('productTitle', function() {
		return {
			// E for Element or A for Attribute
			restrict: 'A',
			templateUrl: 'product-title.html'
		};
	}); // end productTitle Directive

	app.directive('productPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function() {
				// Initialize panel
				this.tab = 1;
				// Function expression
				this.selectTab = function(setTab) {
					this.tab = setTab;
				};
				// Check which tab is selected
				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	}); // end productPanels Directive
})(); // end of closure