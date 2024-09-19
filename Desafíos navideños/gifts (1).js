function findFirstRepeated(gifts) {
    // Code here
    let duplicates = [];
    let res = -1;
    let one = false;
    gifts.forEach(element => {
        let pos = duplicates.indexOf(element);//si no lo encuentra devuelve -1
        if (pos === -1) {
            duplicates.push(element);//llegan los no duplicados y se aguregan
        } else if ( one === false ){
            one = true;//Evita que pueda pasar más de una respuesta, ya que no puedo usar return ni breack en un forEach
            res = element;//actualizo res
        }
    })
    return res
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
//¡Ojo! Los elfos dicen que esto es una prueba técnica de Google.

