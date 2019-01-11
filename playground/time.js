const moment = require('moment');

// var date = moment();

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('MMM Do, YYYY h:mm a'));


// var date = new Date();
// console.log(date.getMonth());