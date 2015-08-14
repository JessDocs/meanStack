'use strict'

app.service('dataService', function($http, $q){
    this.getBirdData = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/api/birds'
        }).then(function(res){
            console.log('dataService line 9 - res: ', res);
            //.data or .message give diffrent info
            
            //now add var and change deferred.resolve
            // var birdString = res.data.message;
            //deferred.resolve(res);
             deferred.resolve(res.data);
        })
        return deferred.promise;
    };


    this.createBird = function(bird) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/api/birds',
            data: bird
        }).then(function(res){
            console.log('dataService line 29 - res.data.message: ', res); 
             deferred.resolve(res);
        });
        return deferred.promise;
    };
});