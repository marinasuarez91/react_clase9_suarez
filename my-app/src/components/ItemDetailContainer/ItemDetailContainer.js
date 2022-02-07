import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css"
import ItemDetail from "./ItemDetail";

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>


const Details = () => {

    const {id} = useParams ();
    const [product, setProduct] = useState ();
    const [isLoading, setIsLoading] = useState (false);

    useEffect (() => {
        const URL = `http://localhost:3001/productos/${id}`;
        setIsLoading (true);
        fetch (URL)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .finally(() => setIsLoading(false));
    }, [id]);

    if (isLoading || !product) return <p>Cargando...</p>;

    return (<>
        <ItemDetail product={product}/>
    </>
    )
};

export default Details;