const reverseString = function(string) {
    return string.split('').reverse().join('');
}

reverseString("Hello");
reverseString("Hello there");
reverseString("123! abc!");
reverseString('');

// Do not edit below this line
module.exports = reverseString;
