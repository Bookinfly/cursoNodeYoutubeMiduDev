const fs = require('node:fs');
console.log('leyendo el primer archivo...');
const text = fs.readFileSync('./usuarios.txt', 'utf-8');

console.log(text);

console.log('hacer cosas mientras lee el archivo');

console.log("Leyendo el segundo archivo");

const secondText = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(secondText);