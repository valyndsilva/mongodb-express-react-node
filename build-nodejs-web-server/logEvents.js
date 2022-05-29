// npm modules (installed manually using npm install date-fns and npm install uuid)
const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

// common core modules (don't need to install these manually)
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  //   console.log('logItem:', logItem);
  try {
    //appendFile is used to update a file but it also creates a file if the file does not exist
    // It returns an error : ENOENT: no such file or directory, open
    // To avoid the error check if dir does not exist:
    if (!fs.existsSync(path.join(__dirname, 'logs'))) { // if directory logs does not exist
      await fsPromises.mkdir(path.join(__dirname, 'logs'));
    }
    await fsPromises.appendFile(
      path.join(__dirname, 'logs', 'eventLog.txt'),
      logItem
    );
  } catch (err) {
    console.error(err);
  }
};
// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss')); // https://date-fns.org/

// console.log(uuid()); // https://www.npmjs.com/package/uuid

module.exports = logEvents;
