angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})

		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode(true);

}]);