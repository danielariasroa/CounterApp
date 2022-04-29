
describe('Pruebas en el archivo demo.test.js', () => {
   
    test ( 'deben ser iguales los dos string', () => {

        const mensaje = ('Hola puta');
    
        const mensaje2= ('Hola puta');
    
        expect(mensaje).toBe(mensaje2);
    
    })

})

