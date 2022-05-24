// const fs = require('fs'); // The fs module enables interacting with the file system in a way modeled on standard POSIX functions.

// We replace the above fs attached to a promise and then use async and await to avoid callback hell.
const fsPromises = require('fs').promises;

const path = require('path'); // The node:path module provides utilities for working with file and directory paths.
// Note: The console in nodeJS is in the terminal. So to run it type in the terminal: node filename. Ex: node index
// NodeJS is asynchronous in nature.

// 1. Read Files in nodeJS:

// fs.readFile(path[, options], callback) // here the options default encoding is 'null' so we need to specify it here manually. If we don't specify it we have t use toString() to conver the data to string.

// fs.readFile('./files/starter.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   console.log(data.toString()); // To read data use toString()
// });

// fs.readFile(path[, options], callback) -> here utf8 character encoding is the options
// fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data); // Here no need to use toString() as we metion utf8 as an option.
// });

// console.log('Hello...');

// Test uncaught error using a file path hello.txt that doesn't exist:
// fs.readFile('./files/hello.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data); // Here no need to use toString() as we metion utf8 as an option.
// });
// Run:  node index

// When using path module along with fs module we can remove the pathname ('./files/starter.txt') and replace with path.join(__direname, 'directory name','filename')
// fs.readFile(
//   path.join(__dirname, 'files', 'starter.txt'),
//   'utf8',
//   (err, data) => {
//     if (err) throw err;
//     console.log(data); // Here no need to use toString() as we metion utf8 as an option.
//   }
// );

// 2. Write Files in nodeJS:
// fs.writeFile(file, data[, options], callback): here the options default encoding is utf8 so we don't need to specify it here manually.
// fs.writeFile(
// pathname, content, callback
//   path.join(__dirname, 'files', 'reply.txt'),
//   'Nice to meet you.',
//   (err) => {
// We are not reading but only writing data here so we don't need to mention data here
//     if (err) throw err;
//     console.log('Write completed successfully'); // Here no need to use toString() as we metion utf8 as an option.

// 3. Update Files in nodeJS:
//     fs.appendFile(
// pathname, content, callback
//       path.join(__dirname, 'files', 'reply.txt'),
//       '\n\nYes it is.',
//       (err) => {
// We are not reading but only writing data here so we don't need to mention data here
//         if (err) throw err;
//         console.log('Append completed successfully'); // Here no need to use toString() as we metion utf8 as an option.

//4. Rename Files in nodeJS:
//         fs.rename(
// pathname, content, callback
//           path.join(__dirname, 'files', 'newReply.txt'),
//           '\n\nYes it is.',
//           (err) => {
// We are not reading but only writing data here so we don't need to mention data here
//             if (err) throw err;
//             console.log('Rename completed successfully'); // Here no need to use toString() as we metion utf8 as an option.
//           }
//         );
//       }
//     );
//   }
// );
// Avoid callback hell by using async and await instead

// While using async and await:
const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'files', 'starter.txt'),
      'utf8'
    ); // reading the file
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt')); // unlinking the file i.e delete
    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      data
    ); // creating a new file
    await fsPromises.appendFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      '\n\nNice to meet you.'
    ); // update the file
    await fsPromises.rename(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      path.join(__dirname, 'files', 'promiseComplete.txt')
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, 'files', 'promiseComplete.txt'),
      'utf8'
    ); // read the file again and log it.
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// exit on uncaught errors:
process.on('uncaughtException', (err) => {
  // process is a value available to us in node and we don't have to import it manually.
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
