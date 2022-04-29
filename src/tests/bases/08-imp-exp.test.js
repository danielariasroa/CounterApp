import { getHeroeById, getHeroesByOwner } from "../../bases/08-imp-exp";
import heroes from "../../data/heroes";


describe('pruebas en funciones de heroes',()=>{

    test('debe retornar un heroe por id ', () => {
        
        const id = 1;
        
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData);

    })
    

    test('debe retornar undefined si el heroe no existe ', () => {
        
        const id = 10;
        
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    })

    test('debe retornar un arreglo con los heroes de dc ', () => {
        
        const owners = 'DC'
        const heroeowner = getHeroesByOwner(owners)
        const heroeDataow = heroes.filter(heroes => heroes.owner === owners );
       
        expect(heroeDataow).toEqual(heroeowner);

    })

    test('debe retornar un arreglo con los heroes de marvel, con el numero ', () => {
        
        const owners = 'Marvel'
        const heroeowner = getHeroesByOwner(owners)
        
        expect(heroeowner.length).toBe(2);

    })
})