import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import ItemCount from "../ItemListContainer/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {

    const { addItem } = useCart();
    const [counter, setCounter] = useState(0);

    let navigate = useNavigate();

    const goToTienda = () => {
        navigate ("/Tienda");}

    const goToCart = () => {
        navigate ("/Carrito");}

    const handleClick = () => {
        addItem (product, counter);
        goToCart () 
    }
     
    return (<div>
    <div className="ItemDetail">
        <div className="ItemDetailDescription">
            <h1>{product.name}</h1>
            <p>{product.tipo}</p>
            <p className="Price" >{product.price}</p>
            <div className="CreditCard" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                </svg>
                <p>{product.cuotas}</p>
            </div>
            <div className="Cash" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cash" viewBox="0 0 16 16">
                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
                </svg>
                <p>{product.descuento}</p>
            </div>
            <p>{product.description}</p>
            <p>Color: {product.color}</p>
            <p>Medidas: {product.medidas}</p>
            <p>(*) En los próximos pasos podrá elegir método de pago y visualizar costos de envío a domicilio</p>
        </div>
        <div className="ItemDetailCart">
            <img className="ItemDetailImg" src={require(`../../../public/images/Json/${product.img}`)} alt={product.name}></img>
            <ItemCount counter={counter} setCounter={setCounter} />
            <button className="buttonItemDetail" onClick= {handleClick} >Agregar al carrito</button>
            <button className="buttonItemDetail" onClick= {goToTienda} >Volver a tienda</button>
        </div>
    </div>
</div>

)};

export default ItemDetail
