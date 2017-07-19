function factorial(num)
{
	//using ternary operator
	return (num===0 || num===1) ? 1 : num*factorial(num-1);

}