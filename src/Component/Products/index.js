import React, {useEffect, useState} from 'react';

const Products = () => {
    const photoUrl = "https://jsonplaceholder.typicode.com/photos";
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(photoUrl)
        .then(res => res.json())
        .then(result => setProducts(result))
    }, [])


    return (<div>
        {products.map(({ title,thumbnailUrl },index) => (
        <div>
            <img src = "200"  src={thumbnailUrl} alt={title} />
            <h5>{title}</h5>
        </div>
        ))}
    </div>);
}
 
export default Products;