import React from 'react'
import '@testing-library/jest-dom'
import{ shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp";

describe('pruebas en primera app', ()=>{
    /*
test('Debe mostrar el mensaje de "Hola, soy daniel ', () => {
    const saludo = "Hola, soy daniel";

    const {getByText} = render(<PrimeraApp saludo={saludo}/>)

    expect(getByText(saludo)).toBeInTheDocument()
})
*/

test('debe de mostrar primera app correctamente ', () => {

    const saludo = 'Hola, soy daniel'
    const wrapper = shallow(<PrimeraApp saludo={saludo}/>)
    
    expect(wrapper).toMatchSnapshot();
})

test('debe mostrar el subtitulo enviado por props ', () => {
    
    const saludo = 'Hola, soy daniel';
    const subTitulo = 'Soy un subtitulo';

    const wrapper = shallow(
        <PrimeraApp
            saludo={saludo}
            subtitulo={subTitulo}
        
        />
    );

        const textoParrafo = wrapper.find('h2').text();

        expect(textoParrafo).toBe(subTitulo);

})


})