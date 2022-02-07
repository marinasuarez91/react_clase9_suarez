import { useNavigate } from "react-router-dom";
import "./Home.css";

const HomeIndex = () => {

    let navigate = useNavigate();

    const goToTienda = () => {
        navigate ("/Tienda");
    }

    const goToFAQ = () => {
        navigate ("/FAQ");
    }

    return (<div>
        <img className="HomeImg" src={require("../Images/modelos/1.jpg")} alt="modelo"></img>
        <button onClick= {goToTienda} >Quiero mi .nina</button>
        <button onClick= {goToFAQ} >Conocé más</button>


    </div>)
};

export default HomeIndex;