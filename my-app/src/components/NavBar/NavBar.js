import "./NavBar.css";
import {Link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar () {
    return <nav className="NavStyle">
        <div className="Brand">
            <span>
                <Link to="/">.nina</Link>
            </span>
        </div>
        <div className ="NavCart">
            <ul className ="liStyles">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Tienda">Tienda</Link>
                </li>
                <li>
                    <Link to="/FAQ">FAQ</Link>
                </li>
                <li>
                    <Link to="/Contacto">Contacto</Link>
                </li>
            </ul>
            <CartWidget />
        </div>
    </nav>
}

export default NavBar