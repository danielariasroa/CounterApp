import {getSaludo} from '../../bases/02-template-string.js';
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string', () =>{

    test('prueba en el metodo getSaludo', () => {
        const nombre = 'daniel'

        const saludo = getSaludo(nombre)
        console.log(saludo);
                expect(saludo).toBe('Hola '+ nombre);
    })
    
    test('getSaludo debe retornar Hola carlos, si no hay argumento en el nombre ', () => {
      
        const saludo = getSaludo();
        
        expect(saludo).toBe('Hola carlos')


    })
    
})