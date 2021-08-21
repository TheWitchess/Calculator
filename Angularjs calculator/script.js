function Calculator($scope) {
  
    $scope.a = 0;
    $scope.b = 0;
    $scope.c= 0;

    
    $scope.na = function() {
      return $scope.a - 0;
    }
    
    $scope.nb = function() {
      return $scope.b - 0;
    }
    
    $scope.add = function() {
      $scope.c =  $scope.na() + $scope.nb();
    }
    
    $scope.sub = function() {
      $scope.c = $scope.na() - $scope.nb();
    }
    
    $scope.mul = function() {
       $scope.c = $scope.na() * $scope.nb();
    }
    
    $scope.div = function() {
       $scope.c = $scope.na() / $scope.nb();
    }
  }