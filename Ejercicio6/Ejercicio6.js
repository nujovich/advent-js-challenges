export default function sumPairs(numbers, result) {
    // ¡Y no olvides compartir tu solución en redes!
    let array = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if(numbers[i]+numbers[j] === result){
                array[0] = numbers[i]
                array[1] = numbers[j]
                break;
            }
        }
        if(array.length > 0) {
            break
        }
    }
    if(array.length === 0) {
        array = null
    }
    return array
  }