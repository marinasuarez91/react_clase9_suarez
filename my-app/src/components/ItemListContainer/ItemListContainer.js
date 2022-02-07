import { useEffect, useState } from "react";
import Item from "./Item";
import "./ItemListContainer.css"


function ItemListContainer () {
    const [products, setProducts] = useState ([])
    const [isLoading, setIsLoading] = useState (false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const URL = "http://localhost:3001/productos"
        setIsLoading (true);
        fetch (URL)
        .then((response) => response.json())
        .then ((json) => setProducts(json))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));

    }, []);

    if (isLoading) {
        return <p>Cargando...</p>
    }else if (error) {
        return <p>Error</p>;
    }else
        return (
        <div className="ItemListContainer">
            {products.map((product) => <Item key={product.id} product={product} />)}
        </div>
        )
    }

export default ItemListContainer