const fs = require('fs');
const path = require('path');
// const rs = fs.createReadStream('./files/lorem.txt', { encoding: 'utf8' });
const rs = fs.createReadStream(
  path.join(__dirname, 'files', 'lorem.txt'),
  'utf8'
);

const ws = fs.createWriteStream(path.join(__dirname, 'files', 'newLorem.txt'));

// listen for the data coming in from the stream
// rs.on('data', (dataChunk) => {
//   ws.write(dataChunk);
// });

// Better aproach: to listen the data coming in from the stream.
rs.pipe(ws); // .pipe() is more efficient
