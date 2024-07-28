// create an array of String and add 10 stydent names to it
let students = ['James', 'Daniel', 'Shay', 'Sarah', 'David', 'Jess'];
// display all students in console

console.log(students);
// set first student nam Muhtar in the students array

students[0] = 'Muhtar';
console.log(students);
//set the last student name in the students array to Hamza

students[students.length - 1] = 'Hamza';
console.log(students);

console.log('----------------------------------------------------------------');

// iterate students array in reverse order and display each name in console

for (let i = students.length - 1; i >= 0; i--) {
    console.log(students[i]);
}

console.log('----------------------------------------------------------------');

let email = 'CydeoSchool@gmail.com';
// in conditional statement check if the email address contains @gmail.com

if (email.includes('@gmail.com')) {
    console.log('Email is from Gmail');
} else {
    console.log('Email is not from Gmail');
}

console.log('----------------------------------------------------------------');
// create array of integers and add 7 numbers to it

let numbers = [1, 2, 3, 4, 5];
//use for loop to iterate numbers array and display each number in console

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log('----------------------------------------------------------------');

// write a program that can display the max and min value from an array numbers

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
// create the array of integers with 10 integers in it and the array is in unsorted order

let unsortedNumbers = [10, 5, 3, 8, 2, 7, 9, 1, 4, 6];
//write program to sort the array in ascending order. do not use any built in sorting function

for (let i = 0; i < unsortedNumbers.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < unsortedNumbers.length; j++) {
        if (unsortedNumbers[j] < unsortedNumbers[minIndex]) {
            minIndex = j;
        }
    }
    let temp = unsortedNumbers[i];
    unsortedNumbers[i] = unsortedNumbers[minIndex];
    unsortedNumbers[minIndex] = temp;
}
console.log(unsortedNumbers);








