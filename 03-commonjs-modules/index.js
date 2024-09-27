/*
console.log(arguments.callee.toString());

console.log('Vitaliy');
*/

const { myName, myHobbies, myFavoriteNumber } = require('./multiple-export');
const { myName: myOtherName, myFriendsName, myGreatHobbies } = require('./export-and-import');
const greetingFn = require('./my-modules/single-export');

//const greetingFn = require('/xampp/htdocs/Node/03-commonjs-modules/single-export.js');

// IMports from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

// mutates array in the multiple-exports modules!
myHobbies.push('climbing');

// Import from single-export
console.log(greetingFn);
greetingFn(myName);

// Imports from export-and-import
console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatHobbies);