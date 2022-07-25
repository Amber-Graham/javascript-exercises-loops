const palindromes = function (str) {
    const clean = (str) => str.toLowerCase().replace(/[\W_]/g, '');
    cleanStr = clean(str);
    return cleanStr.split('').reduce((match, c, i) => {
        if (!match) {
            return false;
        }
        return c === cleanStr[cleanStr.length -1 - i];
        }, true);
    
}

palindromes('racecar');
palindromes('racecar!');
palindromes('Racecar!');
palindromes('A car, a man, a maraca.');
palindromes('Animal loots foliated detail of stool lamina.');
palindromes('ZZZZ car, a man, a maracaz.')

// Do not edit below this line
module.exports = palindromes;
