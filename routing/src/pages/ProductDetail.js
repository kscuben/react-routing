import { useParams } from "react-router"

const ProductDetail = () => {
    const params = useParams()
    console.log(params.productId)
    return (
        <div>
            <h2> Product detail page</h2>
            <p>{params.productId}</p>
        </div>

    )
}
export default ProductDetail