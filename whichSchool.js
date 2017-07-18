function whichSchool(age) {
  if (age < 13)
    return "Elementary School";
  else if (age < 18 && age >= 13)
    return "Secondary School";
  else
    return "Lighthouse Labs";
}

// console.log("I am 35. Which school should I go to?");
// console.log(whichSchool(35));
// console.log("I am 8. Which school should I go to?");
// console.log(whichSchool(8));
// console.log("I am 14. Which school should I go to?");
// console.log(whichSchool(14));

for (i = 13; i < 18; i++) {
  console.log(i);
  console.log(whichSchool(i)==="Secondary School");
}