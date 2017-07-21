//to remove all falsy values from the given array

function falsyBouncer(arr){

var falsy=[false,null,0,"",undefined,NaN];

return arr.filter(function(val){

if(falsy.indexOf(val)===-1)
rturn val;

});
}

//in one line: return arr.filter(Boolean);