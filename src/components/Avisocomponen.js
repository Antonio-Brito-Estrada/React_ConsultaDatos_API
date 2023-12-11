import React, { useEffect } from 'react'

export const Avisocomponen = () => {
// Se ejecuta una vez cuanodo se monta el componente
    useEffect(() =>{
        alert("El componente esta cargado")

        return () => {
            alert("Componete desmontado");
        };
        
    }, [])

  return (
    <div>
        <p>
        Saludos antonio. ¡como estas?
        </p>
<button onClick={ e=> {
    alert("Bienvenido");
}}> Alert</button>

    </div>
  )
}
