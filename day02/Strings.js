let schoolName = "CYDEO SCHOOL";

console.log(schoolName.length);
console.log(schoolName.length - 1);

console.log(schoolName[0]);
console.log(schoolName[11]);

console.log("------------------------------------");

schoolName = schoolName.toLowerCase();
console.log(schoolName);

schoolName = schoolName.toUpperCase();
console.log(schoolName);

console.log("------------------------------------");

let expectedText = "JavaScript";

let actualText = "javascript";

console.log(
  expectedText.toLocaleLowerCase() === actualText.toLocaleLowerCase()
);

console.log("------------------------------------");

let s = "Python Python Python";
// s = s.replace("Python", "JavaScript");
s = s.replace(/Python/g, "JavaScript");
console.log(s);

console.log("------------------------------------");

let str = "ABCDE12345EFGHTI890JKLMN12345UIOYTR";

str = str.replace(/\d/g, "");
console.log(str);

console.log("------------------------------------");

let w='JavaScript';

for (let i = 0; i < w.length; i++)  {
  console.log(w[i]);
  
}

console.log("------------------------------------");

let email = 'cydeoschool@yahoo.com';

let domain = email.substring(email.indexOf('@') + 1);
console.log(domain);

console.log("------------------------------------");

let employeeName = "John Doe";
let employeeAge = 30;

console.log(`Employee Name: ${employeeName}`);
console.log(`Employee Age: ${employeeAge}`);
