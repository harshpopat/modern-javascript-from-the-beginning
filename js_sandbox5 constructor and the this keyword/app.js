//Person Constructor
function Person(name) {
  this.name = name;
  // console.log(this);  //we have instantiated two objects, hence it should log both of them
}

//this keyword refers to the current instance of the object


//using this in the global scope

console.log(this);

//it gives window object as the output


const brad  = new Person('Brad');
const john  = new Person('John');

// console.log(brad);
// console.log(john);
// we can log the instantiated objects through above console.log or the one in the constructor.

