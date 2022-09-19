/**
 * Realiza un filtrado de objetos oveja que cumplan determinado criterio
 * 
 * @param {*} ovejas 
 * @returns los objetos
 */
export default function contarOvejas(ovejas) {
  return ovejas.filter(o => 
   o.color === 'rojo' && o.name.toLowerCase().includes('na'))
 }