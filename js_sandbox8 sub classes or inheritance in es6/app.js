//sub classes or inheritance in es6

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);  // super() calls the parent class constructor

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '56564554', 'standard');

console.log(john);
console.log(john.greeting());
// console.log(john.getMembershipCost());  // gives error, to access this we need to use the actual class name

console.log(Customer.getMembershipCost());  // this runs fine as we accessed the static function using the class name.