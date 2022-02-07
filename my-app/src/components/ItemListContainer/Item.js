import "./ItemListContainer.css"
import { useNavigate } from "react-router-dom"


const Item = ({ product }) => {
    const navigate = useNavigate();
     
    return (
      <>
      <div className="ItemCard">
        <img className="ImgCard" src={require(`../../../public/images/Json/${product.img}`)} alt={product.name} 
        onClick={() => navigate (`/Tienda/${product.id}`)} />
        <div className="ItemCardDesc">
          <div className="ItemCardText">
            <p className="ProductName">{product.name}</p>
            <p>Color: {product.color}</p>
            <p>{product.price}</p>
          </div>
        </div>
        <button className="ItemButton" onClick={() => navigate (`/Tienda/${product.id}`)}>Ver más</button>
      </div>
      </>
    );
};

export default Item;
