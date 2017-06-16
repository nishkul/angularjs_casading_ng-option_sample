var app =angular.module("Myapp",[]);
app.controller("cascadeController",function($scope){
       $scope.countries = {
                    'India': {
                        'Maharashtra': ['Pune', 'Mumbai', 'Nagpur', 'Akola'],
                        'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur'],
                        'Rajasthan': ['Jaipur', 'Ajmer', 'Jodhpur']
                    },
                    'USA': {
                        'Alabama': ['Montgomery', 'Birmingham'],
                        'California': ['Sacramento', 'Fremont'],
                        'Illinois': ['Springfield', 'Chicago']
                    },
                    'Australia': {
                        'New South Wales': ['Sydney'],
                        'Victoria': ['Melbourne']
                    }
                }; 
    $scope.$watch("statess", function(newValue, oldValue){
        
       $scope.strState="";
        $scope.city="";
    // do something
});
     $scope.$watch("cities", function(newValue, oldValue){
        $scope.city="";
    // do something
});
 $scope.GetSelectedCountry = function ( ) {
               $scope.strCountry = document.getElementById("country").value;
            };
            $scope.GetSelectedState = function () {
                 $scope.strState = document.getElementById("state").value;
             
            };
    
});