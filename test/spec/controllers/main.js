describe('Controller: ModalConnexionCtrl', function () {

  // load the controller's module
  beforeEach(module('agileGrenobleApp'));

  var ModalConnexionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalConnexionCtrl = $controller('ModalConnexionCtrl', {
      $scope: scope
    });
  }));

  it('should display current select item', function () {
    ModalConnexionCtrl.open();
    expect(scope.selected).toBe('item1');
  });
});
