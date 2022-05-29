npm packages are node modules created by 3rd Party.
https://www.npmjs.com/
https://docs.npmjs.com/cli/v8/commands

### Install nodemon globally

Nodemon looks for index.js by default. If if was a different filename then you would need to type that instead.

- sudo npm install nodemon -g
- nodemon
- npm init (follow the instructions and package.json is created.)
- npm install date-fns (installed as dependencies i.e prod dependencies)

### To avoid uploading node_modules on github:

- Create .gitignore file
- Add node_modules in the file

### If a project only had package.json and no node_modules folder:

- npm install (This reads the package.json file and installs all the required dependencies)
- npm install nodemon --save-dev (to save as devdependencies)

### Add script to package.json:

"scripts": {
"start": "node index",
"dev": "nodemon index"
},

npm start (for start you don't need to write run)
mpm run dev

npm install uuid (helps generate ids)

### Version information

"uuid": "^8.3.2"
"package name": ^(major version).(minor version).(patch)
the ^ allows update of the minor version and patch but not the major version to avoid breaking changes.

"uuid": "8.3.2"
allows only this version

"uuid": "~8.3.2"
~ allows only patch version update

"uuid": "\*"
update latest version everytime it's available

To install a specific version:
npm install uuid@8.3.2

To install latest version:
npm install uuid

To check for updates for the packages:
npm update

To uninstall:
npm uninstall nodemon --save-dev or npm rm nodemon --save-dev
When you uninstall the package check your scripts and remove it.

For the event emitter:
npm run dev
