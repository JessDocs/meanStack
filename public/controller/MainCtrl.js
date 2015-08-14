'use strict'

app.controller('MainCtrl', function($scope, dataService){
    $scope.birds;
    
    $scope.createBird = function(bird) {
        console.log('MainCtrl line 6: ', bird);
        //creates
        // name = '',
        // order = '',
        // status = '',
        dataService.createBird(bird).then(function(res){
            console.log('res from MainCtrl in line 8: ', res);
            
        });
        
    };
    $scope.getBirds = function(){
        dataService.getBirdData().then(function(res){
            $scope.birds = res;
            console.log('MainCtrl line 8 - $scope.birds: ', $scope.birds);
        });
    };
    // $scope.getBirds(); brings list of birds right away without pushing button
});