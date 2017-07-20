function titleCase(str){
 
 var arr=str.toLowerCase().split(" ");
 var m=[];
 
 for(var i=0;i<arr.length;i++)
  {
	m.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1,arr[i].length));

    }

 
 return m.join(" ");

}