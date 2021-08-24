import { useForm } from "react-hook-form";

const AgregarUsuario = (props) => {


    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = (data, e) => {
        console.log(data);
        e.preventDefault();

        props.agregarUsuario(data)

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

            <button>Agregar nuevo usuario</button>
        </form>
    )
}

export default AgregarUsuario;