angular.module("myApp").factory("CustomerService", ['$filter', '$location',
  function($filter){

    var service = {};     

    var countrylist = [
        { "id": 1, "country": "USA" },
        { "id": 2, "country": "Canada" },
        { "id": 3, "country": "India" }
    ];

    var statelist = [
        {"Id":1, "state":"Alaska", "countryId": 1},
        {"Id":2, "state":"California", "countryId": 2},
         {"Id":3, "state":"Florida", "countryId": 3},
          {"Id":4, "state":"Texus", "countryId": 3},
          {"Id":5, "state":"Indiana", "countryId": 1}
    ];

    var citylist = [
        {"Id":1, "city":"A", "stateId": 1},
        {"Id":2, "city":"a", "stateId": 2},
        {"Id":3, "city":"aa", "stateId": 3},
        {"Id":4, "city":"bb", "stateId": 3},
        {"Id":5, "city":"b", "stateId": 2},
        {"Id":6, "city":"B", "stateId": 1},
        {"Id":7, "city":"c", "stateId": 2},
        {"Id":8, "city":"cc", "stateId": 3},
        {"Id":9, "city":"d", "stateId": 2}
    ];

    service.getCountry = function(){    
        return countrylist;
    };

    service.getCountryState = function(countryId){
        var states = ($filter('filter')(statelist, {countryId: countryId}));
        return states;
    };


    service.getStateCity = function(stateId){
        var items = ($filter('filter')(citylist, {stateId: stateId}));      
        return items;
    };

    return service;       
}]);