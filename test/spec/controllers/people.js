'use strict';

describe('Controller: PeopleCtrl', function () {

  // load the controller's module
  beforeEach(module('angularMongoApp'));

  var PeopleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PeopleCtrl = $controller('PeopleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a title on page', function () {
    expect(scope.title).toBe("New people");
  });
});
