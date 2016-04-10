var app = angular.module('myApp', [])
		.config(function ($httpProvider) {
			$httpProvider.defaults.useXDomain = true;
		})
		.controller('SearchCtrl', function ($scope, $http, $sce) {

			$scope.trustSrc = function (src) {
				return $sce.trustAsResourceUrl(src);
			};

			$scope.searchFlickr = function (search_tag) {
				
				var url = "https://api.flickr.com/services/rest";

				var request = {
					method: 'flickr.photos.search',
					api_key: api_key,
					tags: search_tag,
					format: 'json',
					nojsoncallback: 1
				};

				$http({
					method: 'GET',
					url: url,
					params: request
				})
						.then(function (response) {
							$scope.results = response.data.photos.photo;
						},
						function (response) {
							alert('error');
						});
			};
		});