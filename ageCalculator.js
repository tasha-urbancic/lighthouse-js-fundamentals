function ageCalculator(name, yearOfBirth, currentYear) {
  var age = currentYear - yearOfBirth;
  var ageStr=age.toString();
  return name + ' is ' + ageStr + ' years old.'
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));