function greetings(name) {
  console.log("Hello Programmers");
  console.log("Hellow Cydeo");
  console.log("Hello world");
}
greetings();
////greetings();
//greetings();
console.log("Test Completed successfully");

console.log("-----------------------------");

function displayValue(value = "Unknown value") {
  console.log(`The value is ${value}`);
}

displayValue(100);
displayValue("JavaScript");
displayValue();

function square(number) {
  let result = number * number;
  return result;
}
let num = square(10);
console.log(num);
