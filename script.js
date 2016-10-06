var app = angular.module('myApp', []);



app.controller('calculator', function($scope) {
  $scope.limit = 7;
  $scope.isDot = false;
  $scope.inputBar = '0';
  $scope.tempDefault = '0';//='0' just to be safe
  $scope.defaultStyle = 'color: #000000';
  $scope.clearStyle = 'color: #cce6ff';
  $scope.inputBarStyle = $scope.defaultStyle;
  $scope.onClick0 = function() {
    if($scope.inputBar != '0' && $scope.inputBar.length < $scope.limit)
      $scope.inputBar += '0';
  };
  $scope.onClick1 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = '1';
    else if($scope.inputBar.length <= $scope.limit)
      $scope.inputBar += '1';
  };
  $scope.onClick2 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = '2';
    else if($scope.inputBar.length <= $scope.limit)
      $scope.inputBar += '2';
  };
  $scope.onClick3 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = '3';
    else if($scope.inputBar.length <= $scope.limit)
      $scope.inputBar += '3';
  };
  $scope.onClick4 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = '4';
    else if($scope.inputBar.length <= $scope.limit)
      $scope.inputBar += '4';
  };
  $scope.onClick5 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = '5';
    else if($scope.inputBar.length <= $scope.limit)
      $scope.inputBar += '5';
  };
  $scope.onClick6 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = '6';
    else if($scope.inputBar.length <= $scope.limit)
      $scope.inputBar += '6';
  };
  $scope.onClick7 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = '7';
    else if($scope.inputBar.length <= $scope.limit)
      $scope.inputBar += '7';
  };
  $scope.onClick8 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = '8';
    else if($scope.inputBar.length <= $scope.limit)
      $scope.inputBar += '8';
  };
  $scope.onClick9 = function() {
    if($scope.inputBar === '0')
      $scope.inputBar = '9';
    else if($scope.inputBar.length <= $scope.limit)
      $scope.inputBar += '9';
  };
  $scope.onClickDot = function() {
    if(!$scope.isDot) {
      $scope.inputBar += '.';
    }
  };
  $scope.onClickChangeSign = function() {
    var str = $scope.inputBar;
    if(str.charAt(0) === '-') {
      $scope.inputBar = str.substring(1, str.length);
      $scope.limit -=1;
    }
    else {
      $scope.inputBar = '-' + str;
      $scope.limit +=1;
    }
  };
  $scope.askIfClear = function() {
    $scope.tempDefault = $scope.inputBar;
    $scope.inputBar = 'clear?';
    $scope.inputBarStyle = $scope.clearStyle;
  };
  $scope.showDefault = function() {
    $scope.inputBarStyle = $scope.defaultStyle;
    $scope.inputBar = $scope.tempDefault;
  };
  $scope.onClickClear = function() {
    $scope.inputBar = '0';
  }

});
