import { useForm } from "react-hook-form";

const EditarUsuario = (props) => {

    //console.log(props.usuarioActual);

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        defaultValue: props.usuarioActual
    });

    setValue('name', props.usuarioActual.name);
    setValue('username', props.usuarioActual.username);


    const onSubmit = (data, e) => {
        console.log(data);

        e.preventDefault();

        data.id = props.usuarioActual.id;

        props.actualizarUsuario(props.usuarioActual.id, data)


        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input
                type="text"
                name="nombre"
                {...register("nombre", {
                    required: { value: true, message: "Campo requerido" }
                })}
            />
            <span className="text-danger text-small d-block mb-2">
                {errors.nombre && errors.nombre.message}
            </span>


            <label>Nombre de usuario</label>
            <input

                type="text"
                name="usuario"
                {...register("usuario", {
                    required: { value: true, message: "Campo requerido" }
                })} />
            <span className="text-danger text-small d-block mb-2">
                {errors.usuario && errors.usuario.message}
            </span>

            <button>Editar usuario</button>
        </form>
    )
}

export default EditarUsuario;