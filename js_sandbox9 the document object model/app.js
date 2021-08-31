// The Document Object Model

let val;

val = document;  //provides the whole document

val = document.all;  // provides all tags in the document from top to bottom in sequence.

val = document.all[1]; // like array its also zero based index

val = document.all.length; //property

val = document.head;
val = document.body;
val = document.domain;
val = document.URL;
val = document.contentType;

// selecting without using selectors, its not recommended
val = document.forms;
val = document.forms[0];

val = document.classes; //gives string of all classes
// val = document.classList[0];
// gives the collection of classes

val = document.images;
val = document.scripts;

console.log(val);