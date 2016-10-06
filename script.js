var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
   $scope.first = 'Some';
   $scope.last = 'One';
   $scope.heading = 'Message: ';
   $scope.updateMessage = function() {
     $scope.message = 'Hello ' + $scope.first +' '+ $scope.last + '!';
   };
});

app.controller('calculator', function($scope) {
  $scope.inputBar = '0';
  $scope.num0 = '0';
  $scope.num1 = '1';
  $scope.num2 = '2';
  $scope.num3 = '3';
  $scope.num4 = '4';
  $scope.num5 = '5';
  $scope.num6 = '6';
  $scope.num7 = '7';
  $scope.num8 = '8';
  $scope.num9 = '9';
  $scope.onClick0 = function() {
    if($scope.inputBar != '0' && $scope.inputBar.length < 9)
      $scope.inputBar += $scope.num0;
  };
  $scope.onClick1 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = $scope.num1;
    else if($scope.inputBar.length <= 9)
      $scope.inputBar += $scope.num1;
  };
  $scope.onClick2 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = $scope.num2;
    else if($scope.inputBar.length <= 9)
      $scope.inputBar += $scope.num2;
  };
  $scope.onClick3 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = $scope.num3;
    else if($scope.inputBar.length <= 9)
      $scope.inputBar += $scope.num3;
  };
  $scope.onClick4 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = $scope.num4;
    else if($scope.inputBar.length <= 9)
      $scope.inputBar += $scope.num4;
  };
  $scope.onClick5 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = $scope.num5;
    else if($scope.inputBar.length <= 9)
      $scope.inputBar += $scope.num5;
  };
  $scope.onClick6 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = $scope.num6;
    else if($scope.inputBar.length <= 9)
      $scope.inputBar += $scope.num6;
  };
  $scope.onClick7 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = $scope.num7;
    else if($scope.inputBar.length <= 9)
      $scope.inputBar += $scope.num7;
  };
  $scope.onClick8 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = $scope.num8;
    else if($scope.inputBar.length <= 9)
      $scope.inputBar += $scope.num8;
  };
  $scope.onClick9 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = $scope.num9;
    else if($scope.inputBar.length <= 9)
      $scope.inputBar += $scope.num9;
  }
});
