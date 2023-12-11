import React, { useEffect, useState } from 'react'
import { Avisocomponen } from './Avisocomponen';

export const PruebaComponets = () => {

const [ usuario, setUsuario ] = useState("victor robles");
const [ fecha, setFecha ] = useState("01-01-1998");
const [ contador, setContador ] = useState(0);

const modUsuario  = (e) => {
    setUsuario(e.target.value);

}

const cambiarFecha = e => {
    setFecha(Date.now())
}

// Es como el onInit en angular 
// cuando le agregas el [] solo se ejecuta una vez
useEffect(() => {
    alert("prueba")
}, [])

// si queres que se mande cada que modifiques un data, se lo mandas de parametro
useEffect(() => {
    setContador(contador+1)
    console.log("Aumenta contador"+contador)
}, [usuario, fecha])


  return (
    <div>Nombre: 
        <strong className={contador >= 10 ? 'labelColor' : "label"}> {usuario}</strong>
  <br/>
  <strong className='label'>Fecha: {fecha}</strong>      
        <br/>
        <input type='text'
        onChange={ modUsuario}
        placeholder='Cambiar nombre'
        />
        <br/>
        <button onClick={cambiarFecha}>cambiar</button>
        <br/>
            { usuario === "Antonio" && <Avisocomponen/>}
    </div>
  )
}
