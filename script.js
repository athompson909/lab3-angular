var app = angular.module('myApp', []);



app.controller('calculator', function($scope) {
    $scope.limit = 7;
    $scope.isDot = false;
    $scope.operationPushed = false;
    $scope.multOperations = false;
    $scope.prev = 0;
    $scope.next = 0;
    $scope.inputBar = '0';
    $scope.division = false;
    $scope.multiplication = false;
    $scope.addition = false;
    $scope.subtraction = false;
    $scope.tempDefault = '0';//='0' just to be safe
    $scope.defaultStyle = 'color: #000000';
    $scope.clearStyle = 'color: #cce6ff';
    $scope.inputBarStyle = $scope.defaultStyle;
    $scope.onClick0 = function() {
        if($scope.inputBar != '0' && $scope.inputBar.length < $scope.limit) {
            $scope.inputBar += '0';
        }
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
    if(str = '0') {}
    else if(str.charAt(0) === '-') {
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
        $scope.tempDefault = '0';
    };
    $scope.divide = function() {
        $scope.prev = parseInt($scope.inputBar);
        $scope.division = true;
        $scope.operationPushed = true;
        $scope.inputBar = '0';
    };
    $scope.times = function() {
        $scope.prev = parseInt($scope.inputBar);
        $scope.multiplication = true;
        $scope.operationPushed = true;
        $scope.inputBar = '0';

    };
    $scope.minus = function() {
        $scope.prev = parseInt($scope.inputBar);
        $scope.subtraction = true;
        $scope.operationPushed = true;
        $scope.inputBar = '0';

    };
    $scope.plus = function() {
        $scope.prev = parseInt($scope.inputBar);
        $scope.addition = true;
        $scope.operationPushed = true;
        $scope.inputBar = '0';

    };
    $scope.equals = function() {
        $scope.displayAnswer = true;
    };

    $scope.displayInput = function() {
        if($scope.displayAnswer) {
            $scope.displayAnswer = false;
            $scope.operationPushed = false;
            if($scope.division) {
                $scope.inputBar = 'a: ' + ($scope.prev / parseInt($scope.inputBar)).toString();
                $scope.division = false;
            }
            else if($scope.multiplication) {
                $scope.inputBar = 'a: ' + ($scope.prev * parseInt($scope.inputBar)).toString();
                $scope.multiplication = false;
            }
            else if($scope.subtraction) {
                $scope.inputBar = 'a: ' + ($scope.prev - parseInt($scope.inputBar)).toString();
                $scope.subtraction = false;
            }
            else if($scope.addition) {
                $scope.inputBar = 'a: ' + ($scope.prev + parseInt($scope.inputBar)).toString();
                $scope.addition = false;
            }
        }
        if($scope.inputBar.charAt(0) != 'a') {
            if ($scope.inputBar.length > $scope.limit) $scope.inputBar = 'out of range';
        }
        else if ($scope.inputBar.length > $scope.limit + 3) $scope.inputBar = 'out of range';
        return $scope.inputBar;

    };


});
