import {useState} from 'react'
import Cart from './Cart';
import useFetch from './useFetch';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, removeItem } from './redux/cartreducer';
const Product = () => {
      const id = parseInt(useParams().id) 
 
    const [currentimg, setcurrentimg] = useState("img2");
    const [quantity, setquantity] = useState(1);

    const {data, isloading, error} = useFetch(`/products/${id}?populate=*`);
    console.log(data)
    const dispatch = useDispatch()
    return(                                        
    <div className="product">
      <div className="prodleft">
        <div className="imageleft">
            <img src={ process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} onClick={()=>{setcurrentimg("img2")}}/>
            <img src={ process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} onClick={()=>{setcurrentimg("img")}} />
        </div>
        <div className="imageright">
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.[currentimg]?.data?.attributes?.url} alt="" />
        </div>

      </div>
      <div className="prodright">
        <div className="prodrightcontainer">
        <span className='producttitle'>{data?.attributes?.title}</span>
        <span className='productprice'>${data?.attributes?.price}</span>
        <span className='productdesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quae voluptas, cumque impedit praesentium assumenda dolorum quisquam, veritatis distinctio eius accusantium sed ab. Sint, nesciunt quasi? Perferendis ullam quis quidem?</span>
        <div className='addquantity'>
          <span className='span' onClick={()=>{setquantity(quantity===1 ? 1:quantity-1)}}>-</span>
          <span className='one'>{quantity}</span>
          <span className='span' onClick={()=>{setquantity(quantity+1)}}>+</span>
        </div>
        <button className='addtocart' onClick={()=>dispatch(addToCart(
            {
            id:data.id,
            title:data.attributes.title,
            desc:data.attributes.desc,
            price:data.attributes.price,
            img: process.env.REACT_APP_UPLOAD_URL + data.attributes.img.data.attributes.url,
            quantity
           }
        )
        )}> 
        < AddShoppingCartIcon  /> ADD TO CART</button>
        <div className='customize'>
            <div className='wishlist'>
                <FavoriteBorderIcon/>
                <span>Add to wishlist</span>
            </div>
            <div className='compare'>
                <AddBoxIcon/>
                <span>Add to wishlist</span>
            </div>
            </div>
        </div>

        <div className='tagcontainer'>
            <div className='tags'>
                <span>Vendor: Polo</span>
                <span>Product Type: T-shirt</span>
                <span>Tag: T-shirt, Women, Top</span>
            </div>
            <div className='info'>
            <span>DESCRIPTION</span>
                <span>ADDITIONAL INFORMATION</span>
                <span>FAQ</span>
            </div>
        </div>

 </div>

    </div>
)}
 
export default Product;