class Employee {
  constructor(
    employeeName = "Unknown",
    age = 0,
    gender = "Unknown",
    salary = 50000
  ) {
    this.employeeName = employeeName;
    this.age = age;
    this.gender = gender;
    this.salary = salary;
  }
  work() {
    console.log(`${this.employeeName} is working`);
  }

  toString() {
    return `Employee name: ${this.employeeName}, Age: ${this.age}, Gender: ${this.gender}, Salary: ${this.salary}`;
  }
}

let employee1 = new Employee("Breanna", 35, "Female", 100000);

console.log(employee1);

let employee2 = new Employee();
console.log(employee2);

let employee3 = new Employee('Aygun');
employee1.work();