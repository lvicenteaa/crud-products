import { useForm } from "react-hook-form";
import { createProduct, deleteProduct, updateProduct, getProduct } from "../api/products.api";
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react";

export function ProductsFormPage(){

    const { register, handleSubmit, formState:{
        errors
    }, setValue } = useForm();

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        if (params.id){
            await updateProduct(params.id, data)
        }else{
            await createProduct(data)
            navigate('/products')
        }
    })

    useEffect(()=> {
        async function loadProduct(){
            if(params.id){
                const res = await getProduct(params.id);
                setValue('nombre', res.data.nombre)
                setValue('descripcion', res.data.descripcion)
                setValue('precio', res.data.precio)
            }
        }
        loadProduct();
    }, [])

    return (
        <div>
            <form onSubmit={onSubmit} action="">
                <input type="text" name="nombre" id="nombre" placeholder="Nombre" {...register("nombre", { required: true})} />
                {errors.nombre && <span>Este campo es requerido</span>}
                <textarea name="descripcion" id="descripcion" cols="30" rows="10" placeholder="Descripcion" {...register("descripcion", { required: false})}></textarea>
                {errors.descripcion && <span>Este campo no es requerido</span>}
                <input type="text" name="precio" id="precio" placeholder="Precio" {...register("precio", { required: true})}/>
                {errors.precio && <span>Este campo es requerido</span>}
                <button>Guardar</button>
            </form>
            { params.id && (
                <button onClick={async() => {
                    const accepted = window.confirm('are you sure?')
                    if (accepted){
                        await deleteProduct(params.id)
                    }
                }}>
                Borrar
            </button>
            )}
        </div>
    )
}