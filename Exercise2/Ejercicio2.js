const carta = 'bici coche balón _playstation bici coche peluche'

const arr =  carta.trim().split(' ').filter(s => s.indexOf('_') === -1)

  const cadena = arr.toString()

  const result = {}
  arr.forEach(s => {
    result[s] = cadena.split(s).length-1;
  });


console.log(result)