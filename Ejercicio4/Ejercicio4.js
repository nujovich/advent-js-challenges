export default function createXmasTree(height) {
    let arbol = ""
    const ramaLength = (height*2) - 1
    const total = height+2
    for (let i = 1; i <= total; i++) {
        if(i <= height) {
            if(i === height) {
                arbol+= "*".repeat(ramaLength).concat('\n')
            } else {
                // totaL de _ a cada lado
                const underscoreBySide = height-i
                // total de _ en la rama
                const totalUnderscors = underscoreBySide*2
                // total de * en la rama
                const totalAsterics =  ramaLength - totalUnderscors
                let countAsteriscs = 0
                for (let j = 1; j <= ramaLength; j++) {
                    if(j <= underscoreBySide) {
                        arbol+='_'
                    } else if(countAsteriscs < totalAsterics) {
                        arbol+='*'
                        countAsteriscs++
                    } else {
                        arbol+='_'
                    }
                }
                arbol = arbol.concat('\n') 
            }

        } else {
            let tronco = ""
            // tronco
            tronco = "_".repeat(ramaLength)
            tronco = tronco.substring(0, height-1) + "#" + tronco.substring(height-1 + 1);
            arbol = arbol.concat(tronco)
            if(i === height + 1) {
                // el ultimo nivel del tronco no debe llevar salto
                arbol = arbol.concat('\n')
            }
        }
    }
    return arbol
  }