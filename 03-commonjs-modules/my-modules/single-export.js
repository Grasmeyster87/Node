function greeting(name) {
    console.log('Hello', name);
}

console.log(__filename);

module.exports = greeting;

// Don't do this
// module.exports renmains {}
//exports = greeting;