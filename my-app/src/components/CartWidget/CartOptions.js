import { useNavigate } from "react-router-dom";

function CartOptions () {

    let navigate = useNavigate();

    const goToCart = () => {
        navigate ("/Carrito");}


    return <div className="CartOptions">
            <select className="SelectCat" name="Categoría">
            <option value="all">Todos</option>
                        <option value="bolso">Bolso</option>
                        <option value="mochila">Mochila</option>
                        <option value="riñonera">Riñonera</option>
            </select>
            <input className="BuscarTipo" type="search" placeholder="Buscar: Nombre, Color, Tipo" id="buscar"></input>          
        </div>
}

export default CartOptions