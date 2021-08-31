//Prototypes

function Person (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// get full name

Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

const mary = new Person('Mary','Johnson');

console.log(mary.getFullName());