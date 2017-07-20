//for truncating a given string: if str length>num, add "..." to the truncated string; "..." will gets //added to strLength if num>3 

function truncateString(str,num){

if(str.length>num)
  {
	if(num<=3)
          {
             return str.slice(0,num)+"...";
             }
         else
          {
            return str.slice(0,num-3)+"...";
           }
    }
else
return str;

}