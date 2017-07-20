//to check if the given string ends with particular target

function confirmEnding(str, target){

  
  return str.substr(-target.length)===target;

   //str.substr(-target.length) will cut substring from str with target.length from last(as it is-)


} 