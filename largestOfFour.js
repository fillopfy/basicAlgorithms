//given four sub-arrays in an array and this algo will  give a new array containing maximum value from //each sub-array


function largestOfFour(arr){

 var m=[];
 
 for(var i=0;i<arr.length;i++)
  {
	m.push(Math.max.apply(null,arr[i]));
	
    }

 return m;

}