import { getImagen } from "../bases/11-async-await";



describe('pruebas con async - await y fetch',()=>{


    test('debe retornar el url de la imagen', async() => {
        const url = await getImagen();
        console.log(url);
        expect( typeof url ).toBe( 'string' );
    })
    
})