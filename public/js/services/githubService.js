angular.module('appServices')
    .factory('githubService', ['$http', '$log', '$base64', '$rootScope',
        function ($http, $log, $base64, $rootScope) {
            let githubService = {};
            let url = 'https://api.github.com/';
            githubService.login = (username, password) => {
                $rootScope.username = username;
                let auth = $base64.encode((username + ':' + password)),
                    headers = {
                        'Authorization': 'Basic ' + auth
                    };

                return $http.get(url, {
                        headers: headers
                    })
                    .then((response) => {
                        return response;
                    })
                    .catch((err) => {
                        return err;
                    });
            };
            githubService.getUser = () => {

                return $http.get((url + 'users/' + $rootScope.username))
                    .then((response) => {
                        $rootScope.userData = response.data;
                        let user_details = {
                            avatar_url: response.data.avatar_url,
                            name: response.data.name,
                            type: response.data.type,
                            html_url: response.data.html_url
                        }
                        response.data = user_details;
                        return response;
                    })
                    .catch((err) => {
                        return err;
                    });
            };
            githubService.getRepos = () => {

                return $http.get($rootScope.userData.repos_url)
                    .then((response) => {
                        return response;
                    })
                    .catch((err) => {
                        return err;
                    });

            }
            return githubService;
        }
    ]);