(function() {
  var app = angular.module('chatApp', []);

  app.controller('MessageCtrl', function($scope) {
    $scope.messages = [{
        Name: 'User 1',
        Message: "The only failure is not to try"
    },{
        Name: 'User 2',
        Message: "The only failure is not to try"
    }, {
      Name: 'User 3',
      Message: "The only failure is not to try"
    }, {
      Name: 'User 4',
      Message: "I grew up in Vancouver, man. That's where more than half of my style comes from."
    }, {
      Name: 'User 5',
      Message: "There's nothing glorious in dying. Anyone can do it."
    }];
  });

})();