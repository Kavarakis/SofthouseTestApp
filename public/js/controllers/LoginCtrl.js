angular.module('LoginCtrl', ['appServices'])
	.controller('LoginController', ['$scope', '$log', '$location', 'githubService',
		function ($scope, $log, $location, githubService) {
			$scope.isError = false;
			$scope.error = null;

			$scope.login = function (event) {
				event.preventDefault();
				githubService.login($scope.user.username, $scope.user.password)
					.then((result) => {
						if (result.status == 401) {
							$scope.isError = true;
							$scope.error = result.data.message;
							return;
						}
						$location.url('home');
					});
			}
		}
	]);