import { useNavigate } from "react-router-dom"

export function ProductCard({ product }) {
    const navigate = useNavigate();
    return (
        <div style={{background: "black"}} onClick={() => {
            navigate('/products/' + product.id)
        }}>
            <h1>{product.nombre}</h1>
            <p>{product.descripcion}</p>
            <p>{product.precio}</p>
        </div>
    )
}