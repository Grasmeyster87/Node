const { myName, myHobbies } = require('./multiple-export');

const myFriendsName = 'Alice';

module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;

//property  names could be different from the varable names
module.exports.myGreatHobbies = myHobbies;