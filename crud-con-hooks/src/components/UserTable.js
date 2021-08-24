const UserTable = (props) => {

  return (

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Accion</th>
        </tr>
      </thead>

      <tbody>
        {
          props.usuarios.length > 0 ?
            props.usuarios.map(usuario => (

              <tr key={usuario.id}>
                <td>{usuario.name}</td>
                <td>{usuario.username}</td>
                <td>
                  <button 
                  onClick={()=>props.editRow(usuario)}

                  className="button muted-button">
                    Editar
                    </button>
                  <button
                  onClick ={()=>{props.eliminarUsuario(usuario.id)}} 
                  className="button muted-button">
                    Borrar
                    
                  </button>
                </td>
              </tr>

            )) : (
              <tr>
                <td colSpan={3}>No users</td>
              </tr>
            )


        }


      </tbody>
    </table>
  )
}

export default UserTable;