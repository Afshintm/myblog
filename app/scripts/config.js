'use strict';

 angular.module('config', [])

.constant('ENV', {name:'production',apiEndpoint:'http://afshinproductsdevelop.azurewebsites.net/api'})

.constant('fbProductsUrl', 'https://afshinproduct.firebaseio.com')

.constant('fbArticlesUrl', 'https://afshinblog.firebaseio.com')

.constant('fbjomonCustomersUrl', 'https://jomoncustomers.firebaseio.com/')

;