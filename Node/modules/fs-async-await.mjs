import { readFile } from 'node:fs/promises';//En .mjs usamos import


async function init () {
    console.log("Leyendo el archivo");
    const text = await readFile('./archivo.txt', 'utf-8');//el codigo asincrono espera a resolver esta linea para resolver el restp de ça function, sin bloquear el hilo principal
    console.log('primer texto: ', text);//luego sigue la ejecución
    console.log('----> Hacer cosas mientras lee el archivo ...');
    console.log('Leyendo el segundo archivo');
    const secondText = await readFile('./usuarios.txt', 'utf-8');//vuelve a esperar resolver otro await
    console.log('segundo texto: ', secondText);// y finaliza
} //Esta siendo secuencial
init()