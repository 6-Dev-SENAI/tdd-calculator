const somar = require("../utils/calculadora.js").somar

describe("#Calculadora", () => {
    describe("@Adição", () => {
        const numPositivo = 1
        const numNegativo = -7
        const zero = 0
        const numPositivoGrande = 8
        it ("Soma de dois números positivos devem resultar em um número positivo", () => {
            const resultado = somar(numPositivo, numPositivo)

            expect(resultado).toBeGreaterThanOrEqual(0)
        })

        it ("Soma de um número negativo com um número positivo, deve resultar em negativo", () => {
            const resultado = somar(numNegativo, numPositivo)

            expect(resultado).toBeLessThan(0)
        })
        
        it ("Soma de um número negativo com um número positivo de maior valor, deve resultar em positivo", () => {
            const resultado = somar(numNegativo, numPositivoGrande)

            expect(resultado).toBeGreaterThanOrEqual(0)
        })

        it ("Soma de dois números negativos devem resultar em um número negativo", () => {
            const resultado = somar(numNegativo , numNegativo)

            expect(resultado).toBeLessThan(0)
        })
        
        it ("Soma de um número com zero, deve retornar ele mesmo", () => {
            const resultadoA = somar(numNegativo, zero)
            expect(resultadoA).toBe(numNegativo)

            const resultadoB = somar(numPositivo, zero)
            expect(resultadoB).toBe(numPositivo)
        })
    })

    describe("@Subtração", () => {})
    
    describe("@Divisão", () => {})
    
    describe("@Multiplicação", () => {})
})