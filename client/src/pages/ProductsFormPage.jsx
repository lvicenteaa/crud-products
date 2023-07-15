import { useForm } from "react-hook-form";
import { createProduct, deleteProduct, updateProduct, getProduct } from "../api/products.api";
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react";
import { toast } from "react-hot-toast";


export function ProductsFormPage() {

    const { register, handleSubmit, formState: {
        errors
    }, setValue, } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateProduct(params.id, data);
            toast.success('Tarea actualizada', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                },
            });
        } else {
            await createProduct(data)
            toast.success('Tarea creada', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        }
        navigate('/products');
    })

    useEffect(() => {
        async function loadProduct() {
            if (params.id) {
                const res = await getProduct(params.id);
                setValue('nombre', res.data.nombre)
                setValue('descripcion', res.data.descripcion)
                setValue('precio', res.data.precio)
            }
        }
        loadProduct();
    }, [])

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit} action="">
                <input type="text" className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" name="nombre" id="nombre" placeholder="Nombre" {...register("nombre", { required: true })} />
                {errors.nombre && <span>Este campo es requerido</span>}

                <textarea className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" name="descripcion" id="descripcion" cols="30" rows="10" placeholder="Descripcion" {...register("descripcion", { required: false })}></textarea>
                {errors.descripcion && <span>Este campo no es requerido</span>}

                <input type="text" className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" name="precio" id="precio" placeholder="Precio" {...register("precio", { required: true })} />
                {errors.precio && <span>Este campo es requerido</span>}

                <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Guardar</button>
            </form>
            {params.id && (
                <div className="flex justify-end">
                    <button className="bg-red-500 p-3 rounded-lg w-48 mt-3"
                        onClick={async () => {
                            const accepted = window.confirm('are you sure?')
                            if (accepted) {
                                await deleteProduct(params.id);
                                toast.success('Tarea eliminada', {
                                    position: "bottom-right",
                                    style: {
                                        background: "#101010",
                                        color: "#fff"
                                    }
                                })
                                navigate("/products")
                            }
                        }}>
                        Borrar
                    </button>
                </div>
            )}
        </div>
    )
}