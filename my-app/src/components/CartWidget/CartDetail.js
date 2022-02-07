import "./CartWidget.css"
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>


function CartDetail () {

    const {cart, removeItem, removeAll} = useCart()

    let navigate = useNavigate();

    const goToTienda = () => {
        navigate ("/Tienda");}

    const goToEndShop = () => {
        navigate ("/Finalizar");}
        

    return <div>
        {cart.map((compra)=>{
            return <div className="CartDetailContainer" key={compra.item.id}>
                <img className="CartImg" src={require(`../../../public/images/Json/${compra.item.img}`)} alt={compra.item.name}></img>
                <div className="DetailInfo">
                    <p className="CartDetailTitle" >{compra.item.name}</p>
                    <p>Cantidad: {compra.quantity}</p>
                    <p>{compra.item.price}</p>
                    <p>{compra.quantity} * {compra.item.price}</p>
                </div>
                <div className="DeleteItem">
                    <svg onClick={()=> removeItem(compra.item.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6.5 1a.5.5 0 0 0-.5.5v1h4v-1a.5.5 0 0 0-.5-.5h-3ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1H3.042l.846 10.58a1 1 0 0 0 .997.92h6.23a1 1 0 0 0 .997-.92l.846-10.58Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg>
                </div>
                </div>
        })}

        <button className="buttonCartDetailSec" onClick={removeAll}>Eliminar todo</button>
        <button className="buttonCartDetail" onClick= {goToTienda} >Seguir comprando</button>
        <button className="buttonCartDetail" onClick= {goToEndShop} >Finalizar compra</button>

        </div>
}

export default CartDetail