import { getUser, getUsuarioActivo } from "../../bases/05-funciones";
import '@testing-library/jest-dom';


describe('Pruebas en 05-funciones', () =>{

        test('getUser debe retornar un objeto ', () => {
          
            const userTest ={
                uid: 'ABC123',
                username: 'El_Papi1502'
        
            }

            const user = getUser();

            expect(user).toEqual(userTest);

        })
        
        test('getUseractivo debe retornar un objeto ', () => {
            const nombre = 'pendejo';
            const userAct = getUsuarioActivo(nombre);
           
            const usera = {
                uid: 'ABC567',
                username: nombre
            }
              
            
            
            expect(userAct).toEqual(usera);

        })
        
})