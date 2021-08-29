//object literals

const person = {
  firstName : 'Steve',
  lastName : 'Smith',
  age : 36,
  email : 'steve@aol.com',
  hobbies : ['music', 'sports'],

  getBirthYear : function() {
    return 2021 - this.age;
  }
}

let val;

val = person.firstName;
val = person['lastName'];
val = person.getBirthYear();

console.log(val);