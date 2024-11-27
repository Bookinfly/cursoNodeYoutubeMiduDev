const path = require('node:path');

console.log(path.sep);

const filePath = path.join('.', 'subfolder', 'text.txt');
console.log(filePath);

const base = path.basename('C:\\Users\\amado\\Downloads\\vispunk (18).jpg');
console.log(base)

const filename = path.basename('C:\\Users\\amado\\Downloads\\vispunk (18).jpg', '.jpg');
console.log(filename)

