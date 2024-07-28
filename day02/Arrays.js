let element = ["James", "Daniel", 1, 2, 3, 4, true, false, 5.5];

console.log(element);
console.log(element.length);

console.log("--------------------------------------------------------");

let students = ["Shay", "Sarah", "David", "Jessica"];
console.log(students);
console.log(students[0]);
console.log(students[2]);
students[2] = "Michael";
console.log(students);

console.log("--------------------------------------------------------");

let numbers = [45, 55, 65, 75, 80, 90, 100];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("--------------------------------------------------------");

for(let each of numbers) {
    console.log(each);
}

console.log("--------------------------------------------------------");

let employees = ['James', 'Daniel',  'Jessica',  'David']; 
employees.push('Emily');
console.log(employees);
employees.unshift('Michael');
console.log(employees);
employees.unshift('Robert');
employees.unshift('Robert');
employees.unshift('Robert');
employees.unshift('Robert');
console.log(employees);
employees.splice(1, 3);
console.log(employees);

employees.shift();
console.log(employees);
employees.pop();
console.log(employees);



