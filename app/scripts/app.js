'use strict';

/**
 * @ngdoc overview
 * @name myblogApp
 * @description
 * # myblogApp
 *
 * Main module of the application.
 */ 

angular.module('myblogApp', ['ui.router' ,'ngAnimate','ngCookies','config','person'])
  .factory('firebaseRef',['$window',function($window){
 	return function(url){
 		var fireRef = url;
 		return fireRef;
 	};
 }])
.provider('config',function(){
   this.$get = function(){
     return angular.module('config');
   };
 })

// using provider helper before config to define a provider 
// person provider simply return an instance of Person constructor function which in turn has to ahve a $get property or method 
// containing a n instance of the service it provides 

// .provider('person',function(){
// 	return new Person();
// })
// we inject the defined provider using the provider name + 'Provider' suffix to our module config phase 
.config(['ENV','$provide', '$stateProvider', '$urlRouterProvider', 'personProvider','$httpProvider', 'configProvider',
  function(ENV, $provide, $stateProvider, $urlRouterProvider ,personProvider,$httpProvider, configProvider){

  //In configuration phase we get other dependecies using their providers
  //at this stage services, factories and controllers have not been instantiated yet
  console.log('myblogApp configuration phase is happening...') ;
  
  console.log(configProvider);

  //$httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];


	personProvider.setFirstName('afshin');
	personProvider.setLastName('Teymoori');

// 	var t = $provide.provider('appConfig',function(){
// 		this.$get = function(){
// 			return angular.module('config');
// 		};
// 	});

// console.log(t);


	$provide.provider('myService',function myServiceProvider(){
		this.$get = function(){
			var fireRef = 'hello';
			return fireRef;	
		};
	});

  $provide.factory('myHttpInterceptor',['$q','$window','$cookies',function myHttpInterceptor($q,$window,$cookies){
    var requestInterceptor = {
      request: function(config){

        config.headers.Authorization = 'Basic YWZzaGluOlBhc3N3b3JkIQ==';
        if ($window.sessionStorage.authenticatedUser)
        {        
          //console.log('this is authenticated User from sessionStorage :');
          //console.log($window.sessionStorage.authenticatedUser);
        }

        var authenticatedUser = $cookies.get('authenticatedUser') ;
        if(authenticatedUser)
        {
          //console.log('this is authenticated User from cookieStore :');
          //console.log(authenticatedUser) ;
          $cookies.remove('authenticatedUser');

        }

        return config || $q.when(config);
      }

    } ;

    return requestInterceptor ;
  }]);

  $httpProvider.interceptors.push('myHttpInterceptor');

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');
  //




     // $stateProvider.whenAuthenticated = function (path, state) {

     //    securedRoutes.push(path); // store all secured routes for use with authRequired() below
     //    state.resolve = state.resolve || {};

     //    state.resolve.user = ['auth', function (auth) {
     //      return auth.authObj.$requireAuth(); //fetch auth info
     //    }];

     //    $routeProvider.when(path, route);
     //    return this;
     //  };

     // console.log($stateProvider) ;

  // Now set up the states
  $stateProvider
    .state('main',{
      url:'/main',
      templateUrl:'views/main.html',
      controller:'MainCtrl'
     })
    .state('contacts', {
      url: '/contacts',
      templateUrl: 'views/main.html',
      controller:'MainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/main.html',
      controller:'MainCtrl'
    })
    .state('products', {
      url: '/products',
      templateUrl: 'views/productList.html',
      controller:'productCtrl'
    })
    .state('articles', {
      url: '/articles',
      templateUrl: 'views/articles.html',
      controller:'articlesCtrl'
    })
    .state('syncDb', {
      url: '/syncDb',
      templateUrl: 'views/syncDb.html',
      controller:'syncDbCtrl'
    })
    .state('invoices', {
      url: '/invoice',
      templateUrl: 'views/invoiceList.html',
      controller:'invoiceCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller:'loginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/reg.html',
      controller:'regCtrl'
    })
    .state('customers', {
      url: '/customers',
      authRequired: true,
      templateUrl: 'views/Customers/customers.html',
      controller:'customersCtrl',
      resolve: {
        'currentAuth':['auth',function(auth){
          
          
          var p = auth.authObj.$requireAuth();
          return p ;

        }]
      }
    })
    .state('customers.edit', {
      url: '/:id/edit',
      templateUrl: 'views/Customers/customerEdit.html',
      controller:'customersEditCtrl'
    })
    .state('customers.new', {
      url: '/new',
      templateUrl: 'views/Customers/customerNew.html',
      controller:'customersNewCtrl'
    })

    .state('state1.list', {
      url: '/list',
      templateUrl: 'partials/state1.list.html',
      controller: function($scope) {
        $scope.items = ['A', 'List', 'Of', 'Items'];
      }
    })
    .state('state2', {
      url: '/state2',
      templateUrl: 'partials/state2.html',
      controller:'state2Ctrl',
      abstract:true

    })
    .state('state2.list', {
      url: '/list',
        templateUrl: 'partials/state2.list.html',
        controller: function($scope) {
          $scope.things = ['A', 'Set', 'Of', 'Things'];
        }
      });
}])

/**
   * Apply some route security. Any route's resolve method can reject the promise with
   * { authRequired: true } to force a redirect. This method enforces that and also watches
   * for changes in auth status which might require us to navigate away from a path
   * that we can no longer view.
   */
    // .run(['$rootScope', '$location', 'auth', 

    //   function ($rootScope, $location, auth) {
    //     // watch for login status changes and redirect if appropriate
    //     auth.authObj.$onAuth(check);

    //     // some of our routes may reject resolve promises with the special {authRequired: true} error
    //     // this redirects to the login page whenever that is encountered
    //     $rootScope.$on("$stateChangeError", function (e, next, prev, err) {
    //       if (err === "AUTH_REQUIRED") {
    //         $state.go('login');
    //       }
    //     });

    //     function check(user) {
    //       if (!user && authRequired($location.path())) {
    //         //console.log('check failed', user, $location.path()); //debug
    //         $location.path(loginRedirectPath);
    //       } 
    //     }

    //     function authRequired(path) {
    //       return securedRoutes.indexOf(path) !== -1;
    //     }
    //   }
    // ]);


// .run(['firebaseRef','$cookies','$state','$rootScope','auth','authorization','config',
// 	function(firebaseRef,$cookies,$state,$rootScope,auth,authorization,config){

 .run(['$cookies','$state','$rootScope','config','firebaseProductsDb','myauth',
  function($cookies,$state,$rootScope,config,firebaseProductsDb,myauth){

    console.log('run phase is running');
    //auth.authObj.$onAuth(check);
     console.log(config);
     console.log(firebaseProductsDb);
  
     $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
      console.log('$stateChangeStart is happening') ;
        // track the state the user wants to go to; authorization service needs this
        $rootScope.toState = toState;
        $rootScope.toStateParams = toStateParams;
        // if the principal is resolved, do an authorization check immediately. otherwise,
        // it'll be done when the state it resolved.
        //console.log($rootScope.toState);
        // var authData = auth.authObj.$getAuth();
        if(toState.authRequired){
          authorization.authorize();
        }
      });    

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      console.log('state Changed Error.');
      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the login page
      if (error === 'AUTH_REQUIRED') {
        console.log('Redirectibg to login');
        $state.go('login');
      }
    });

		$state.go('main');
	}]);

