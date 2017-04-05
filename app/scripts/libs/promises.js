'use strict';

(function(){
// function delaySimulator(){ 
// 	return new Promise (function(resolve){
// 		setTimeout(function(){
// 			resolve({name:'Afshin',age:40});
// 		},5000);	
// 	});
// }

function delaySimulator(succeed){ 
	return new Promise (function(resolve,reject){
		setTimeout(function(){
			if (succeed){
				resolve({name:'Afshin',age:40});
			}else
			{
				reject(new Error("failure"));
			}
		},5000);	
		var a = 'end of callback';
		console.log(a);
	});
}



var p = delaySimulator(false);
p.then(function(res){
	console.log(res);
},function(reject){
	console.log(reject);
});
console.log(p) ;
setTimeout(function(){console.log(p);},6000);
})();



