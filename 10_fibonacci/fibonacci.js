   const fibonacci = number => {
        if (number < 0) return "OOPS";
        let array = [];
        index = parseInt(number) - 1;
        for (i = 0; i <= index; i++) {
          if (i <= 1) 
            array.push(1); // fill the first two elements with 1
          else 
            array.push(array.at(-2) + array.at(-1)); // fill the next element with the sum of the last two elements
        }
        return array[index]; 
      };

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
