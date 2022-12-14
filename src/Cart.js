import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'react';
import { removeItem, resetCart } from './redux/cartreducer';

const Cart = () => {

   const dispatch = useDispatch();
   const products = useSelector(state=> state.cart.products)
   const total =()=>{
       let amount = 0
       products.map(item=> {
        amount = amount + item.quantity * item.price
       });
       return amount.toFixed(2)
   }
  

    return (
        <div className="cart">
           <span> Products in your cart</span>
           {products.map(item=>(
         
           <div className="productcart">
            <img src={item.img} alt="" />
            <div className="cartdes">
             <span className="carttitle">{item.title}</span>
          
             <span className="cartpara">{item.desc}
                </span>
              
                <span className='cartprice'>{item.quantity} X ${item.price}</span>
            </div>
            <DeleteOutlineIcon className='bin' onClick={()=>dispatch(removeItem(item.id))}/>
           </div>
         
           ))}
             <div className="totalcontainer">
            <div className="total">
               <span className='subtotal'>SUBTOTAL</span> 
               <button>PROCEED TO CHECKOUT</button>
               <span className='reset'onClick={()=>dispatch(resetCart())} >reset cart</span> 
            </div>
            <span>${total()}</span>
           </div>
        
        </div>
      );
}
 
export default Cart;