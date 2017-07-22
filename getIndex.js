//this will return the index of num in arr such that after insertion of num, array is sorted in ascending order


function getIndexToIns(arr,num){

arr.push(num);
arr.sort(function(a,b){

return a-b;

});

return arr.indexOf(num);


}


//return arr.concat(num).sort(function(a,b){return a-b;}).indexOf(num);