import "./CartWidget.css"
import { useNavigate } from "react-router-dom";

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>


function CartPay () {

    let navigate = useNavigate();

    const goToTienda = () => {
        navigate ("/Tienda");}

    const goToEditShop = () => {
        navigate ("/Carrito");}
        

    return <div>
        <button onClick= {goToTienda} >Pagar</button>
        <button onClick= {goToEditShop} >Ir atrás</button>

        </div>
}

export default CartPay