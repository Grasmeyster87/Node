const myName = 'Vitaliy';
const myHobbeis = ['swiming', 'boxing', 'cycling'];
const myFavoriteNumber = 77;

console.log('Text from the multiple-exports CommonJS module');

module.exports.myName = myName;
exports.myHobbeis = myHobbeis;
exports.myFavoriteNumber = myFavoriteNumber;