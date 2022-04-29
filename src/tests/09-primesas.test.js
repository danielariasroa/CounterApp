import { getHeroeByIdAsync } from "../bases/09-promesas";
import heroes from "../data/heroes";



describe('Pruebas en promesas', ()=>{

test('debe retornar un heroe segun el id ', (done) => {

    const id = (1);
    getHeroeByIdAsync(id).then( heroe =>{

        expect(heroe).toBe(heroes[0])

        done();
    })
    
})

test('debe retornar el mensaje malo si el heroe no se encuentra ', (done) => {

    const id= (10);

    getHeroeByIdAsync(id).catch(heroemal =>{

        expect(heroemal).toBe('No se pudo encontrar el héroe');
        done();

    })
    
})



})