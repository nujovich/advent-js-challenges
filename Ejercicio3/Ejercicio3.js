/**
 * Evalúa un string según una serie de reglas definidas
 * 
 * @param {*} letter 
 * @returns true si la carta es un string válido
 */
export default function isValid(letter) {
    // ¡No dejes que el Grinch gane!
   
    // Si contiene { o [ no es válido
    if(letter.indexOf('{') !== -1 || letter.indexOf('[') !== -1) return false;
   
    // Si contiene vacío no es válido
    if(/\(\)/.test(letter)) return false

    // Si no cierra paréntesis correctamente no es válido
    if(letter.indexOf('(') !== -1 && letter.indexOf(')') === -1) return false

    // Si contiene texto entre paréntesis es válido
    if(/\(.*\)/.test(letter)) return true
   
   }