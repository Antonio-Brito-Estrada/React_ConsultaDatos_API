import React, { useState } from 'react'

export const FormularioComponen = () => {

    const [usuario, setUsuario] = useState({});
    const conseguirInformacionForm = e => {

        e.preventDefault();

        let datos = e.target;

        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            biografi: datos.biografi.value,
        }

        setUsuario(usuario);

    };

    const cambiarDatos = e => {
        let nameInput =  e.target.name;
        // Trae los datos de la variable usuario, hace una copia de ella y le modifica el valor que se este cambiando
            setUsuario(estado_previo => ({
                ...estado_previo,
                nuevoValor:e.target.value,
                // va a poner el nombre del campo que se este modificando y va acambiar su valor
                [nameInput]:  e.target.value
            })
        );

    };

  return (
    <div>
        <h1>Formularios en react js</h1>
        {usuario.nuevoValor && <h1> Valor {usuario.nuevoValor }</h1>}
        {/* // validcion si viene el campo biografia mostrar informacion */}
        {usuario.biografi ? (
        <div className='label'>
        {usuario.nombre} {usuario.apellido}
         </div>
        ) : <p className='label'> Rellene todos los datos</p>}


        <form onSubmit={conseguirInformacionForm}>
            <input type="text" placeholder='Nombre' name='nombre' onChange={cambiarDatos}/>
            <input type="text" placeholder='Apellido' name='apellido' onChange={cambiarDatos}/>

            <select name='genero' onChange={cambiarDatos}>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>

            <textarea placeholder='Biografia' name='biografi' onChange={cambiarDatos}></textarea>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}
