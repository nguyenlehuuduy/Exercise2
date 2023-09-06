const fs = require('fs');
fs.copyFile ('newfile.txt','copyfile.txt', (err) => {
if (err) {
throw err;
}
console.log('File is Copied!');
});