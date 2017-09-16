myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'getData'
        })
        .when('/details/:category/:value',{
        	templateUrl     : 'views/detail-view.html',

        	controller 		: 'detailController',

        	controllerAs 	: 'currentData'
        })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h2>404 page not found</h2>'
            }
        );
}]);