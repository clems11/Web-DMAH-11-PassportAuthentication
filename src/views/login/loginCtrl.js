angular.module('AuthApp')

	.controller( 'LoginController', function( $scope ) {

		var vm = this;

		vm.pressed = function() {
			alert( 'Logging in!' );
		};

	} );
