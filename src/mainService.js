angular.module('AuthApp')

	.service( 'MainService', function( $http, $q ) {

		var user;

		this.getUser = function() {
			if( !user ) {
				return $http.get( '/api/user' )
					.then( function( user ) {
						return user.data;
					} );
			}
			else {
				return $q.when( user );
			}
		}

	} );
