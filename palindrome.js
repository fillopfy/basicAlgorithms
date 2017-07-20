function palindrome(str){

	var re=/[^A-Za-z0-9]/gi;  //non-alphanumeric characters-regularExpression
	//replacing all non-alphanumeric chars from str and make it lowercase	
	var mStr=str.replace(re,"").toLowerCase();

	//split,reverse and join to check for pallindrome
	var nStr=mStr.split("").reverse().join("");
	
	if(mStr===nStr)
	{
		return true;
	}

	else
	return false;

}

//In short:
// return str.replace(re,"").toLowerCase()====str.replace(re,"").toLowerCase().split("").reverse("").join("")?true:false;