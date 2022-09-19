/**
 * Construye un objeto json con el nombre del regalo y la cantidad de veces que aparece en la cadena
 * Los regalo con un _ adelante se descartan
 * @param {*} letter 
 * @returns un objeto json
 */
export default function listGifts(letter) {

  const arr =  letter.trim().split(' ').filter(s => s.indexOf('_') === -1)

  const cadena = arr.toString()

  const result = {}
  arr.forEach(s => {
    result[s] = cadena.split(s).length-1;
  });

  return result
}
