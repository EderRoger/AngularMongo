'use strict';

describe('Controller: PessoaCtrl', function () {

  // load the controller's module
  beforeEach(module('angularMongoApp'));

  var PessoaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PessoaCtrl = $controller('PessoaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a title on page', function () {
    expect(scope.title).toBe("Cadastrando nova Pessoa");
  });
});
