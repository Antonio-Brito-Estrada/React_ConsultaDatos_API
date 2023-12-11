import React, { useEffect, useState } from 'react'



export const AjaxComponen = () => {
let [contador, setContador] = useState(0)
const [usuario, setUsario] = useState([]);
const [carando, setCargando ] = useState(true);

const getUsuariosEstaticos = () => {
    setUsario([
        { "id": 1, "email": "michael.lawson@reqres.in", "first_name": "Antonio", "last_name": "Lawson", "avatar": "https://reqres.in/img/faces/7-image.jpg" },
        { "id": 2, "email": "lindsay.ferguson@reqres.in", "first_name": "Luis", "last_name": "Ferguson", "avatar": "https://reqres.in/img/faces/8-image.jpg" },
        { "id": 3, "email": "tobias.funke@reqres.in", "first_name": "Pedro", "last_name": "Funke", "avatar": "https://reqres.in/img/faces/9-image.jpg" }
    ])
}

//PROMESA
const getUsuraiosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
    .then(respose => respose.json())
    .then(resultado_final => {
        setUsario(resultado_final.data);
        },
        error => {
            console.log(error)
        }
    )
}

// ASYNC - AWAY 
const getUsuraiosAjaxAW = async () => {
   setContador(++contador)
   const peticion = await fetch(`https://reqres.in/api/users?page=${contador}`);
   const {data} = await peticion.json();
   setUsario(data);
}

const getUsuraiosAjaxAWRest = async () => {
    try {
        setContador(--contador)
        // generar el error por poner mal el endpoin
        // const peticion = await fetch(`https://reqres123.in/api/users?page=${contador}`);
        const peticion = await fetch(`https://reqres.in/api/users?page=${contador}`);
        const {data} = await peticion.json();
        setUsario(data);
    } catch(error) {
        // cachar si hay un errro
        console.log("Error", error.message);
    }

 }

useEffect(() => {
    // getUsuariosEstaticos();
    // getUsuraiosAjaxPms();
    setTimeout(()=> {
        getUsuraiosAjaxAW();
        setCargando(false);
    },2000)
}, [])

    if(carando ==  true){
        return (
            <div>
                <h2>Cargando datos ...</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Listado de componentes</h2>
                <p>{contador}</p>
        {usuario.length > 0 ? (
        <table className="table table-striped">
            <thead className="table-dark" >
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">PHOTO</th>
                    <th scope="col">NAME</th>
                    <th scope="col">LAST_NAME</th>
                    <th scope="col">EMAIL</th>
                </tr>
            </thead>

            <tbody>
                { usuario.map( user => (
                    <tr key={user.id}>
                        <th scope="row">{ user.id }</th>
                        <th> <img src={user.avatar}  width={30}/></th>
                        <td>{ user.first_name }</td>
                        <td>{ user.last_name }</td>
                        <td>{ user.email }</td>
                    </tr>
                ))}
            </tbody>
        </table>
        ): <h2> No hay datos que mostrar, regrese de pagina</h2>}
                {/* <ul >
                    {
                        usuario.map(user => {
                            return <li key={user.id}>
                                <img src={user.avatar} width={50} />
                                {user.first_name} {user.last_name}</li>
                        })
                    }
                </ul> */}
                <button className='label' onClick={ getUsuraiosAjaxAW }> Siguiente pagina </button>
                &nbsp;
                <button className='label' onClick={ getUsuraiosAjaxAWRest }> Anterior pagina </button>
            </div>
        )
    }

}
