import UserTable from "./components/UserTable"
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AgregarUsuario from "./components/AgregarUsuario";
import EditarUsuario from "./components/EditarUsuario";


const App = () => {

  const datosUsuarios = [
    { id: uuidv4(), name: 'Joni', username: 'jotamr' },
    { id: uuidv4(), name: 'Many', username: 'emedemany' },
    { id: uuidv4(), name: 'Dante', username: 'dededante' },
  ]

  const [usuarios, setUsuarios] = useState(datosUsuarios);

  //Agregar usuario
  const agregarUsuario = (usuario) => {
    usuario.id = uuidv4();
    setUsuarios([...usuarios, usuario])
  }

  //Eliminar Usuario

  const eliminarUsuario = (id) => {

    //console.log(id);
    const arrayFilter = usuarios.filter(usuario => usuario.id !== id);
    setUsuarios(arrayFilter);
  }

  //Editar usuario

  const [editar, setEditar] = useState(false);

  const [usuarioActual, setUsuarioActual] = useState({
    id:null,name:"", username:""
  });

  const editRow = (usuario) =>{
    setEditar(true);
    setUsuarioActual({
      id: usuario.id, name: usuario.name, username: usuario.username
    })

  }

  const actualizarUsuario =(id,actualizarUsuario)=>{
    setEditar(true);
    setUsuarios(usuarios.map(usuario => (usuario.id === id ? actualizarUsuario : usuario)))
  }

  return (
    <div className="container">
      <h1>Aplicacion CRUD con Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        {editar ? (
          <div>
            <h2>Editar usuario</h2>
            <EditarUsuario 
              usuarioActual={usuarioActual}
              actualizarUsuario={actualizarUsuario}
            />
          </div>
        ) : (
          <div>
            <h2>Agregar usuario</h2>
            <AgregarUsuario agregarUsuario={agregarUsuario} />
          </div>
        )
        }

        </div>

        

        <div className="flex-large">
          <h2>Ver usuario</h2>
          <UserTable
            usuarios={usuarios}
            eliminarUsuario={eliminarUsuario}
           
            editRow={editRow} />
        </div>
      </div>
    </div>
  )
}

export default App;