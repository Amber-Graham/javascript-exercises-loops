const sumAll = function(num1, num2) {
    if(num1 < num2) {
        let sum = num2 * (num2 + 1)/2 - num1 * (num1 + 1)/2 + num1;
        return sum;
    } else if(num1 > num2){
        let sum = num1 * (num1 + 1)/2 - num2 * (num2 + 1)/2 + num2;
        return sum;
    } else {
        return 'ERROR';
    }
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);

// Do not edit below this line
module.exports = sumAll;
