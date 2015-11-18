describe('HomeCtrl', function() {
  beforeEach(module('ravebot'));

  var ctrl;

  var response = {'name': 'party'}

  var httpBackend;
  beforeEach(inject(function(_$cookies_, _$httpBackend_, _$rootScope_, _$controller_) {
    $cookies = _$cookies_;
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $controller = _$controller_;
    ctrl = $controller('HomeCtrl', {'$rootScope' : $rootScope, '$scope': $scope});
    httpBackend = $httpBackend
    httpBackend
      .when("POST", "https://stormy-bastion-7671.herokuapp.com/partys")
      .respond({response: response})
  }));

  it('exists', function() {
    expect($scope.createParty('test')).toBeDefined;
  })
  it('can create a party with a unique name', function() {
    $scope.createParty('party');
    httpBackend.flush()
    expect(cookies.name).toEqual('party');
  });
});
