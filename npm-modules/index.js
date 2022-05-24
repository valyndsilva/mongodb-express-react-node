// console.log('testing!');
const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss')); // https://date-fns.org/
console.log('Test');
console.log(uuid()); // https://www.npmjs.com/package/uuid
