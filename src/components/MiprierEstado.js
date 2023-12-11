import React,  { useState } from 'react'

export const MiprierEstado = () => {
  let [nombre, setNombre] = useState("Victor Robles");

  const cambairNombreBoton = () => {
    nombre === "Victor Robles" ? setNombre("Antonio Brito") : setNombre("Victor Robles");
  }

  const cambiarNombre = (e, nombre) => {
    setNombre(nombre)
  }

  return (
    <div>
      <h1>Mi primer estado</h1>
      <strong className='label'> {nombre} </strong> 
      <br/>
      <button onClick={cambairNombreBoton}> Cambiar</button>
      <br/>
      <input onKeyUp={ e => cambiarNombre(e, e.target.value)} type="text" placeholder='Nombre' />
    </div>
  )
}
