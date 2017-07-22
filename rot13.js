//ro13:https://en.wikipedia.org/wiki/ROT13

function rot13(str){

var encoded=str.split("");
var arr=[];   
var decoded=[];


//to get ascii values of char

for(var i=0;i<encoded.length;i++)
{
  arr.push(encoded[i].charCodeAt());
}



//rot13 logic

for(var j=0;j<arr.length;j++)
{
  if(arr[j]>=65 && arr[j]<=91)
   {
	if(arr[j]>=65+13)
	 {
	   arr[j]-=13;
	   }
	else
	   arr[j]+=13;
    }
}




//converting ascii to char, decoding

for(var k=0;k<arr.length;k++)
{
  decoded.push(String.fromCharCode(arr[k]));
}



return decoded.join("");




}