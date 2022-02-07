import { Link } from "react-router-dom";

const NotFound = () => {
    return (<div>
        <h1>Error 404</h1>
        <Link to="/">Volver al home</Link>
    </div>)
};

export default NotFound;