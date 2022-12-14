import { Link } from "react-router-dom";
const Card = ({item}) => {
  
   console.log(item)
    return ( 
    <div className="card">
    <Link to={`/product/${item.id}`}>
      <div className="card-image">
       {item?.attributes.isnew && <span className="nseason">New Season</span>}
        <img className="mainimg" src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img.data.attributes.url} alt="productimage" />
        <img className="secondimage" src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img2.data.attributes.url} alt="productimage " />
      </div>
      <h2 className="card-title">{item?.attributes.title}</h2>
      <div className="cardprices">
        <span className="oldprice">${item.oldPrice || item?.attributes.price + 10}</span>
        <span className="newprice">${item?.attributes.price}</span>
      </div>
      </Link>
    </div>
     );
}
 
export default Card;