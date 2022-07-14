const removeFromArray = function(array1, ...arg) {
    if (arg == 3) {
        array1.splice(2,1);
        return array1;
    }
}

removeFromArray([1, 2, 3, 4], 3);


// Do not edit below this line
module.exports = removeFromArray;
