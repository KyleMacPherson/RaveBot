ravebot.controller('SetSongCtrl', ['$scope', '$http', '$state', '$location', '$cookies', function($scope, $http, $state, $location, $cookies) {
  $scope.partyName = $cookies.get('partyName')

  $scope.searchResults = [];

  $scope.searchSC = function(searchQuery) {
    SC.initialize({
      client_id: '8e74002fd2542f89231c5133c2a54833'
    });

    SC.get('/tracks', {
      q: searchQuery
    }).then(function(tracks) {
      self.searchResults = tracks;
    });
  };
  
}]);
