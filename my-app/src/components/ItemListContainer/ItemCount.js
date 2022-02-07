import React from "react";
import "./ItemListContainer.css";

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>


function ItemCount ({counter, setCounter}) {

    const stock= 15

    const restarClick = () => {
        if (counter -1 >=0){
            setCounter(counter - 1);
        }
    }
    
    const sumarClick = () => {
        if (counter +1 < stock){
            setCounter(counter + 1);
        }
    }

    return (
        <div className="ItemCount">
            <p>Cantidad: </p>
            <p className="NumberCounterCard">{counter}</p>
            <button className="buttonCount" onClick={restarClick}>-</button>
            <button className="buttonCount" onClick={sumarClick}>+</button>
        </div>
    )

}

export default ItemCount