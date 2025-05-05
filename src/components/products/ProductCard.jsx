import { Link } from "react-router";
import Rating from "../Rating";

const ProductCard = ({ product }) => {
    return (
        <Link to={`/marketplace/${product.id}`}>
            <div className="p-4 h-96 w-72 shadow shadow-gray-400 rounded">
                <h3 className="text-xl text-center">{product.title}</h3>

                <div>
                    <img src={product.thumbnail} className="max-w-full" alt="image" />

                    <Rating rate={product.rating} roundMethod="ceil" showRateText={false}/>
                </div>
            </div>
        </Link>
    )

}

export default ProductCard;