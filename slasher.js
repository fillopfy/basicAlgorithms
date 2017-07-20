//to chop of given number of elements from the givn array and return what is left in the original array

function slasher(arr, howMany){

 arr.splice(0,howMany);
 
 return arr;

}