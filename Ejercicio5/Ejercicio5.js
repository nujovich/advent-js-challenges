export default function daysToXmas(date) {


    const dateNavidad = new Date("Dec 25, 2021")
    
    // UTC convierte las fechas en milisegundos, así es más fácil manipular la diferencia
    const dateNavidadUTC =  Date.UTC(dateNavidad.getFullYear(), dateNavidad.getMonth(),     dateNavidad.getDate());
    const dateUTC =  Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    // En un dia hay 86.400.000 milisegundos
    const day = 1000*60*60*24;


    if(dateNavidadUTC > dateUTC) {
        return (dateNavidadUTC - dateUTC)/day
    } else {
      // si la fecha de navidad es menor devolver un negativo
        return -(dateUTC - dateNavidadUTC)/day
    }
}

    