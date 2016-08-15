function MainController($scope) {
  $scope.name = 'Hello Angular';
}

angular
  .module('app')
  .controller('MainController', MainController);
