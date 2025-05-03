import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Rating from '../components/Rating';

export default function Product() {

    const [product, setProduct] = useState({});

    const { id } = useParams();

    const getProduct = async () => {
        const api = `https://dummyjson.com/products/${id}`;

        const res = await fetch(api);

        console.log('res', res);

        if (!res.ok) return alert('Product not found')

        const data = await res.json();
        console.log('data', data);

        setProduct(data)
    }

    useEffect(() => {
        getProduct();
    }, [])



    console.log(id);

    return (
        <div className='p-5'>
            <div className="flex gap-4">
                <h3 className="text-3xl">{product.title}</h3>
                <Rating rate={product.rating} />
            </div>

            <img src={product.thumbnail} alt="" />

        </div>
    )
}