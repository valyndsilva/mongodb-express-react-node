const logEvents = require('./logEvents');

// common core module 'events'
const EventEmitter = require('events');

class Emitter extends EventEmitter {}

// initialize object
const myEmitter = new Emitter();

// // add listener for log event
// myEmitter.on('log', (msg) => logEvents(msg)); // .on listens event

// setTimeout(() => {
//   // Emit event
//   myEmitter.emit('log', 'Log event emitted');
// }, 2000);
