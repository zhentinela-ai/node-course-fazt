const path = require('path');

// console.log(path.sep);
const filePath = path.join('/public', 'dist', '/styles', 'mian.css');

console.log(filePath);
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));
console.log(path.resolve('dist'));
