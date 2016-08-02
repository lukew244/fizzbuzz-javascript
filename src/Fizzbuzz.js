var Fizzbuzz = function() {};

Fizzbuzz.prototype.isDivisibleBy = function(divisor, number) {
  return(number % divisor === 0);
};

Fizzbuzz.prototype.play = function(number) {
  if(this.isDivisibleBy(15, number)) {
    return 'fizzbuzz';
  };
  if(this.isDivisibleBy(3, number)) {
    return 'fizz';
  };
  if(this.isDivisibleBy(5, number)) {
    return 'buzz';
  };
  return number

};
