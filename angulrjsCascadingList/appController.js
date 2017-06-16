angular.module('myApp').controller('dropdownCtrl', ['$scope','CustomerService', 'manish', 
   function($scope, CustomerService, s) {
       alert(s);
    $scope.customer ={
        Name:'', 
        Country:'', 
        State: '', 
        City: ''
    };

    $scope.countries = CustomerService.getCountry();

    $scope.getCountryStates = function(){
        $scope.sates = CustomerService.getCountryState($scope.customer.Country);
        $scope.cities =[];
    };

    $scope.getStateCities = function(){
        $scope.cities = CustomerService.getStateCity($scope.customer.State);
    }
}]);
