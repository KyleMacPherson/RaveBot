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
      $scope.searchResults = tracks;
    });
  };

  $scope.sendSong = function(url, message, name) {
    var songData = {'party_name': $scope.partyName, 'url': url, 'name': name, 'message': message}
    $http.post('https://stormy-bastion-7671.herokuapp.com/songs', songData, 'POST').success(function(response) {
      $state.go('setsong')
    });
  }
}]);
