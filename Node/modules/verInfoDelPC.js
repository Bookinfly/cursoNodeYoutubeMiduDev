const os = require('node:os');
// import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

//App para ver los detalles del equipo

console.log('información del sistema operativo');
console.log('---------------------------------');
console.log('Nombre del sistema operativo: ', os.platform() );
console.log('Versión del sistema operativo: ', os.release() );
console.log('Arquitectura: ', os.arch() );
console.log('CPUs: ', os.cpus() );
// Saber los CPUs de la PC es importante para saber cuantos procesos hijos para poder escalar la appendFile.
console.log('Memoria libre: ', (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + ' GB');
console.log('Memoria total: ', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GB');
console.log("Tu pc lleva: " + (os.uptime() /60 /60 /24).toFixed(2) + " Días prendida" );



