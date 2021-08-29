// alert('Hello World');

// Playing with the console

// console.log('Hello World');

// console.log(123);

// console.log(true);

// var greeting = "Hello";
// console.log(greeting);

// console.error('This is an error');

// console.warn('This is a warning')

// console.time('Hello');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.timeEnd('Hello');

// number to string
let val;

val = String(555);
val = String(true);
val = String(new Date());

//toString

val = (5).toString();


//string to number

val = Number('5');
val = Number(true);
val = Number('hello');
val = Number([1, 2, 3]);

val = parseInt(100);
val = parseFloat(100.30);


//output
console.log(val);
console.log(val.length); //works only with strings
console.log(val.toFixed());  //works only with numbers

//type coercion

const val1 = String(5);
const val2 = 6;
const sum = val1+ val2;

console.log(sum);
console.log(typeof sum);
// here js automatically converts the val2 6 to string and then concatenates both 5 and 6, hence ouput is 56