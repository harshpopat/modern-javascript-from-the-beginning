//classes in ES6

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  //any function/method declared inside the class is by default added into th e prototype
}

const mary = new Person('Mary', 'Cooper');

console.log(mary);

//classes are called syntactic sugar as they make the syntax easier but the under the hood working remains same as before