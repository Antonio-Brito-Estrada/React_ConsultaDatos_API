import React, { useState } from 'react';
import PropTypes from "prop-types";

export const Ejercicio = ({year}) => {
    let [anio, setAnio] = useState(year)

    const lastYear = () => {
        setAnio(parseInt(anio)-1)
    }

    const nextYear = () => {
        setAnio(parseInt(anio) + 1)
    }

    const cambiarYear = (e) => {
        setAnio(e.target.value)
    }

  return (
    <div>
        <p> 
        Anio actual <strong className='label'> {anio}</strong> 
        </p>
        <button onClick={ nextYear }>Siguiente año</button>
        <br/>
        <button onClick={ lastYear }>Año pasado</button>
        <br/>
        <input type="number" maxLength={4} onKeyUp={cambiarYear} />
    </div>

  )
}

// Validar que venga la prop y que sea numero
Ejercicio.protoTypes = {
    year: PropTypes.number.isRequired,
}