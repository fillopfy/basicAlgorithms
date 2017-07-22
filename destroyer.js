//seek and destroy:to check if arr contains arguments elements and then destroy it from the arr


function destroyer(arr){

//Array.prototype.slice.call(arguments) convert arguments object into an array
var args=Array.prototype.slice.call(arguments);

return arr.filter(function(val){

if(args.indexOf(val)===-1)
return val;

});

}


//Or, return arr.filter(function(val){ return !args.includes(val);});