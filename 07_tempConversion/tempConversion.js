const ftoc = function(numF) {
  let celsius = (numF - 32) * 5/9;
  let celsiusFinal = parseFloat(celsius.toFixed(1));
  return celsiusFinal;
};

const ctof = function(numC) {
  let fahrenheit = (numC * 1.8) + 32;
  let fahrenheitFinal = parseFloat(fahrenheit.toFixed(1));
  return fahrenheitFinal;
};

ftoc(32);
ftoc(100);
ftoc(-100);
ctof(0);
ctof(73.2);
ctof(-10);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
