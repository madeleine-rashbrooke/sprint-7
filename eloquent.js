// My code for exercise 1: write a minimum value function
function min(a,b) {
  var minValue;
  if (a < b) {
    minValue = a;
  }
  else {minValue = b;}
  return minValue;
};

//my code for exercise 2: write an 'is even' function
function isEven(number){
    if (number == 0)
    return true;  //if number is zero, it's even
    else if (number === 1)
    return false; //if number is one, it's odd
    else if (number < 0)  //if negative number, call isEven on its positive equivalent
    return isEven(number*-1); 
    else 
    return isEven(number-2);  //and call isEven() again
};// 

//my code for exercise 3: 

//the original countBs function:
function countBs(str){
  count = 0;
    for (var i=0; i<str.length; i++){
      if (str.charAt(i) == "B"){
      count++;
      }
    }
  return count; 
};

//final code for countBs using countChar
function countBs(str){
  return countChar(str, "B"); 
};

function countChar(str, char){
  var count = 0;
    for (var i=0; i<str.length; i++){
      if (str.charAt(i) == char){
      count++;
      }
    }
  return count; 
};