const fs = require('node:fs'); 

const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(), //si es fichero
    stats.isDirectory(), //si es directorio
    stats.isSymbolicLink(), //si es un enlace simbólico
    stats.size, //tamaño
)