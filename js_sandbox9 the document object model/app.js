// The Document Object Model

// let val;

// val = document;  //provides the whole document

// val = document.all;  // provides all tags in the document from top to bottom in sequence.

// val = document.all[1]; // like array its also zero based index

// val = document.all.length; //property

// val = document.head;
// val = document.body;
// val = document.domain;
// val = document.URL;
// val = document.contentType;

// selecting without using selectors, its not recommended
//val = document.forms;
//val = document.forms[0];

//val = document.classes; //gives string of all classes
// val = document.classList[0];
// gives the collection of classes

//val = document.images;
//val = document.scripts;


// DOM Selectors for single elements

// 1.document.getElementById()

// console.log(document.getElementById('id of the element'));

// console.log(document.getElementById('id of the element').className);  //gives the classname of that element

// change the styling
// document.getElementById('id of the element').style.background = '#333';

// const taskTitle = document.getElementById('id of the element');

// change content

// taskTitle.textContent = 'Task List';

// console.log(val);

// 2. document.querySelector()   //newer and much more powerful

// document.querySelector('#task-title');

// document.querySelector('.container');

// document.querySelector('h5');

// document.querySelector('li:last-child').getElementsByClassName.color = 'red';   //usage of css pseudo classes

// review this whole code once again