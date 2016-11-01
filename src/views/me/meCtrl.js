angular.module('AuthApp')

	.controller( 'MeController', function( $scope, $http, $state, MainService ) {

		var vm = this;

		MainService.getUser()
			.then( function( user ) {
				if( user === '' ) {
					$state.go( 'Login' );
				}
				vm.user = user;
			} );

	} );
