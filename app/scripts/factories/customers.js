'use strict';
angular.module('myblogApp')
.factory('Customers',['fbjomonCustomersUrl','$q','firebaseJomonCustomersDb','$firebaseArray',function CustomersFactory(fbjomonCustomersUrl,$q,firebaseJomonCustomersDb,$firebaseArray){
    var ref = firebaseJomonCustomersDb.db.ref();
    var customer ={} ;
    var customerArray = $firebaseArray(ref);
    customer = {
        getAll: function(){
            return customerArray ;
        },
        getById: function(id){
            return customerArray.$getRecord(id);
        },
        remove: function(id){
            this.getById(id).then(function(record){
                customerArray.then(function(data){
                    data.$remove(record);
                });
            });
        },
        insert: function(customer){
            var defered = $q.defer();
            customerArray.$add(customer).then(function(data){
                var ref = data.key;
                defered.resolve(customerArray.$indexFor(ref));

                });
            return defered.promise ;
        },
        update: function(customer){
            var defered = $q.defer() ;
            customerArray.$save(customer).then(function(ref){
                console.log('Updated record with id ' + ref.key);
                defered.resolve(customerArray.$indexFor(ref.key));
            }).catch(function(error){
                    defered.reject(error);
                });

            return defered.promise;
        }
    };
    return customer ;
}]);
