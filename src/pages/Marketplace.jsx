import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";

export default function Marketplace() {

    console.log('Marketplace rendered');

    const [products, setProducts] = useState([]);

    console.log('products outside the getProducts function', products);

    console.log('Before UseEffect')

    useEffect(() => {
        console.log('UseEffect fired');
        getProducts();
    }, []);

    console.log('After UseEffect')

    const getProducts = async () => {
        console.log('getProducts fired')

        const res = await fetch('https://dummyjson.com/products');

        console.log('res', res);

        if (!res.ok) return alert('Something went wrong');

        const data = await res.json();

        setProducts(data.products);

        console.log('products inside the getProducts function', products);
    }





    return (
        <div className="p-4">
            <h2 className="text-4xl my-4">Marketplace</h2>

            <div className="flex flex-wrap gap-4 justify-center">
                {
                    products.map(product => <ProductCard product={product} key={product.id} />)
                }
            </div>

        </div>
    )
}