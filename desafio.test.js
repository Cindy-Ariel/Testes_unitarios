const countChar = require('./desafio')


describe('primeiro teste', () => {
    test('testando quantidade de letras', () => {
        const result = countChar('a', 'amor')
        expect(result).toBe(1)
    })

})

