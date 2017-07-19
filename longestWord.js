//to find the longest word in a given string/sentence

function longestWord(str){

 var arr=str.split(" ");//to get an array of words 
 var m=[];//to store length of each word

 for(var i=0;i<arr.length;i++)
  {
	m.push(arr[i].length);

   }

 return Math.max.apply(null,m);//it returns max value from the array m




}







