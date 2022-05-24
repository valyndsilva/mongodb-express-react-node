const fs = require('fs');
const path = require('path');

// check if directory name exists
// if (!fs.existsSync('./new')) {
// // create a new directory if it does not exist
//   fs.mkdir('./new', (err) => {
//     if (err) throw err;
//     console.log('Directory created successfully');
//   });
// }
// if (fs.existsSync('./new')) {
//   // remove the directory if it exists
//   fs.rmdir('./new', (err) => {
//     if (err) throw err;
//     console.log('Directory removed successfully');
//   });
// }

// check if directory name or a file exists (using path)
if (!fs.existsSync(path.join(__dirname, 'new'))) {
  // create a new directory if it does not exist
  fs.mkdir(path.join(__dirname, 'new'), (err) => {
    if (err) throw err;
    console.log('Directory created successfully');
  });
}
if (fs.existsSync(path.join(__dirname, 'new'))) {
  // remove the directory if it does exist
  fs.rmdir(path.join(__dirname, 'new'), (err) => {
    if (err) throw err;
    console.log('Directory removed successfully');
  });
}

// exit on uncaught errors:
process.on('uncaughtException', (err) => {
  // process is a value available to us in node and we don't have to import it manually.
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
