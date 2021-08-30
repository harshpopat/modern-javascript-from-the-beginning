// window methids / objects / properties

//alert
// alert('Hello !');

//prompt
// const input = prompt();
// alert(input);

//confirm
// if(confirm('Are You Sure')){
//   console.log('YES')
// } else {
//   console.log('NO')
// }

//outer height of the window
val = window.outerHeight;
val = window.outerWidth;

//inner height of the window
// val = window.innerHeight;
// val = window.innerWidth;

//scroll points
// val = window.scrollX;  // used for horizontal scroll
// val = window.scrollY;  // for vertical scroll

//location object
val = window.location;  //displays all info
val = window.location.hostname; //provides hostname
val = window.location.port;
val = window.location.href;  //displays the link
val = window.location.search;  //displays the paramereters in the url

//redirect
// window.location.href = 'http://google.com';

//reload
//window.location.reload();

//History Object
// window.history.go(-1)  //takes us to the previously visited website, if -2 then takes to the website visited before that and so on.

// val = window.history.length;

//Navigator Object
val = window.navigator;
val = window.navigator.appName;   //it will always show netscape unless its internet explorer
val = window.navigator.appVersion; //provides the browser version
val = window.navigator.userAgent; //almost same as appVersion
val = window.navigator.platform; //gets the name of the os
val = window.navigator.vendor; //google.inc in case of chrome (browser vendor)
val = window.navigator.language; //language of the browser


console.log(val);