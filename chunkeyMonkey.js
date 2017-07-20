//https://www.freecodecamp.org/challenges/chunky-monkey

function chunkArrayInGroups(arr,size){
 
 var m=[];
 
 for(var i=0;i<arr.length;i+=size)
 {
	m.push(arr.slice(i,i+size))s;

   }

 return m;

}