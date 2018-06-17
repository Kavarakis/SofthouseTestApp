angular.module('HomeCtrl', ['appServices'])
	.controller('HomeController', ['$scope', 'githubService', '$http', '$window',
		function ($scope, githubService, $http, $window) {
			githubService.getUser()
				.then((result) => {
					$scope.user = result.data;
					githubService.getRepos()
						.then((result) => {
							// $scope.repos = result.data;
							$scope.repos = result.data.map(repo => {
								return {
									name: repo.name,
									description: repo.description,
									stargazers_count: repo.stargazers_count
								}
							})
						});
				});
			$scope.save = function (event) {
				event.preventDefault();
				$http.post('/api/write', $scope.repos)
					.then((response) => {
						$window.alert(JSON.stringify(response.data.message));
					})

			}
		}
	]);