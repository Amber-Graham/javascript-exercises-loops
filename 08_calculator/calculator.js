const add = (num1, num2) => num1 + num2;

add(0,0);
add(2,2);
add(2,6);

const subtract = (num1, num2) => num1 - num2;

subtract(10,4);

const sum = function(array) {
  let sumArray = 0;
  for(let i = 0; i < array.length; i += 1) {
    sumArray += array[i];
  }
  return sumArray;
}

sum([]);
sum([7]);
sum([7,11]);
sum([1,3,5,7,9]);

const multiply = function(array) {
  let sumArray = 1;
  for(let i = 0; i < array.length; i++) {
    sumArray = sumArray * array[i];
  }
  return sumArray;
};

multiply([2,4]);
multiply([2,4,6,8,10,12,14]);

const power = (num1, num2) => Math.pow(num1, num2);

power(4,3);

const factorial = function(num) {
  let sum = 1;
  if (num == 0 || num == 1) {
    return sum;
  } else {
    for(let i = num; i >= 1; i--){
      sum = sum * i;
    }
    return sum;
  }
};

factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
