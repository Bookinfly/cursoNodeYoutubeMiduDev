//Está versión contiene un error de lógica, nos pasa el primer elemento 

function findFirstRepeated(gifts) {
    // Code here
    var duplicates = [];
    var large = gifts.length;
    var position = 1;
    gifts.forEach(element => {
        for (position ; position < large; position++){
            if (element === gifts[position]){
                duplicates.push(element);
            }
        }
    })
    // gifts.indexOf(element)
    return duplicates;
}


const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5

/*
Tengo un array con elementos
recorro el array elemento por elemento
en cada iteración:
    corro otra iteración comparando el elemento actual con cada elemento del array menos el actual y los anteriores
    un contador suma cada iteración de este ciclo anidado
    al encontrar igualesn almaceno el valor repetido en un array y en segunda posición le agrego el contador

    luego recorro el array en busca del menor.
    ERROR - EL MENOR PODRÍA NO SER NECESARIAMENTE EL PRIMERO EN REPETIRSE, ESTO SOLO ME DICE LOS 2 MÁS CERCANOS ENTRE SÍ
*/

/*


function findFirstRepeated(gifts) {
    // Code here
    var duplicates = [];
    gifts.forEach(element => {
        if (duplicates.length === 0) {
            duplicates.push(element);
            gifts.shift();
        }
        duplicates.forEach(posit => {
            if (element === posit) {
                return element;
            } else {
                duplicates.push(element);
                gifts.shift();
            }
        })
    })
    return -1;
}
*/