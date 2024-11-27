import { readFile } from 'node:fs/promises'; //import ECMA Script Modules


//Promise
Promise.all([//las promesas que esperamos van en un array
    readFile('./archivo.txt', 'utf-8'),// , no olvidar la coma
    readFile('./usuarios.txt', 'utf-8')
]).then(([text, secondText]) => { //Metodo .then nos dice cuando se cumpla haz esto:"" 
    // En sus parametros hay una arrow function que a su ven tiene parametros, estos son variables que representan las promesas resueltas
    console.log('primer texto: ', text)// finalmente ejecutamos las acciones de la function
    console.log('segundo texto: ', secondText)
})