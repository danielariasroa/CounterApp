import { retornaArreglo } from "../../bases/07-deses-arr";


describe('pruebas en desestructuracion', ()=>{

    test('should ', () => {
        //const arr = retornaArreglo();

        //expect(arr).toEqual(['ABC', 123]);
 
        const [ letras, numeros ] = retornaArreglo();

        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')
        
        expect(numeros).toBe(123)
        expect(typeof numeros).toBe('number')
    })
    
})