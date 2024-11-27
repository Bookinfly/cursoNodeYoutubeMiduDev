const fs = require('node:fs');

console.log('leyendo el primer archivo...');

fs.readFile('./archivo.txt', 'utf-8', (err, text) => { //<-------ejecutas callback
    console.log(text)
} );//el callback lleva 2 parametross, el primero es el error y el segundo la ejecución de la función, el metodo readFile


console.log('hacer cosas mientras lee el archivo');

console.log("Leyendo el segundo archivo");

fs.readFile('./usuarios.txt', 'utf-8', (err, text) => {
    console.log(text);

});


