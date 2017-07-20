//to check if the first string of arr contains all the chars from second string in the given arr


function mutation(arr){

 for(var i=0;i<arr[1].length;i++)
 {
     if(arr[0].toLowerCase().indexOf(arr[1].toLowerCase()[i])===-1)
         return false;
   }
  
   return true;


}