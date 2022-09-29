const countChar = (letraBuscada, frase) => {
    let array_de_letras = frase.split('')
    let resultado = 0

    array_de_letras.map((letra) => {
        if (letra === letraBuscada) {
            return resultado = resultado + 1

        } else {
            console.log('letra não encontrada sou 0')
        }
    })
    return resultado
}


module.exports = countChar 