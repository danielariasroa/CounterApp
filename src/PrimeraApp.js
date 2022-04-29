import React from 'react'
import PropTypes from 'prop-types'

//import React, {Fragment} from 'react'

//FC

const PrimeraApp = ({ saludo, subtitulo }) =>{

    //const saludo = 'Hola mundo';

    /*const saludo = {
            nombre: 'daniel',
            edad: 45 */   
    
    return(
       
        <>
            <h1> { saludo } </h1>
             {/*<pre> {JSON.stringify(saludo, null, 3)} </pre>*/}
             <h2>{subtitulo}</h2>
             <p> a la vivora vovora de la mar, por aqui pueden pasar</p>
        </>
   
    )

    }

    PrimeraApp.propTypes = {
        saludo: PropTypes.string.isRequired
    }
    PrimeraApp.defaultProps = {
        subtitulo: 'Soy un subtitulo'
    }
export default PrimeraApp;