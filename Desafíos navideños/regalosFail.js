//Está versión contiene un error de lógica, nos pasa el primer elemento 

function findFirstRepeated(gifts) {
    // Code here
    let large = gifts.length; //
    let dopleganger = false;
    let position = 0;//regalo
    let positionX = 1; //otra posición del array para comparar
    let answer = -1;//si no se cambia es la respuesta
    while(!dopleganger && position < large) { //mientras no tengas dopleganger y el que se compara sea inferior large, ejecuto:
        if (gifts[position] === gifts[positionX]){ //si regalo[position] es igual a regalo[positionX]
            dopleganger = true; //actualizo dopleganguer (terminara el ciclo al intentar dar otra vuelta)
            answer = gifts[position]; //actualizo respuesta
        }
        positionX++; //incremento la posicion de con quien comparo
        if (positionX >= large){ //si con quien comparo ya es igual a la ultima posici+on del array
            position++; //incremento la posicion del array a un nuevo elemento a comparar contra todos
            positionX = position + 1;
        }

    }
    return answer
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