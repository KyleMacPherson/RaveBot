ravebot.controller('HomeCtrl', ['$scope', '$http', '$state', '$location', '$cookies', function($scope, $http, $state, $location, $cookies) {

  $scope.createParty = function(partyname) {
    var newPartyPost = {'name': partyname}
    $http.post('https://stormy-bastion-7671.herokuapp.com/partys', newPartyPost, 'POST').success(function(response) {
      $cookies.put('partyName', response.name)
      $state.go('partyplayer')
    });
  };

  $scope.joinParty = function(partytojoin) {
    $cookies.put('partyName', partytojoin)
    $state.go('setsong')
  };

}]);
