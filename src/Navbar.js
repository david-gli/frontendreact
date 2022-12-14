import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import Cart from './Cart';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const products = useSelector(state=> state.cart.products)
  const [isopen, setisopen] = useState(false);
    return ( 
    <div className="navbar">
        <div className="wrapper">
        <div className="left">
            <div className="item">
                 <img src="/img/en.png" alt="" />
                 <ArrowDropDownIcon/>
            </div>
            <div className="item">
                <span>NIG</span>
                 <ArrowDropDownIcon/>
            </div>
            <div className="item">
              <Link to="/product/1">
                Women
              </Link>
            </div>
            <div className="item">
            <Link to="/product/2">
                Men
              </Link>
            </div>
            <div className="item">
            <Link to="/product/3">
                Children
              </Link>
            </div>
        </div>

       <div className="center"> <Link to="/"><h1>Davostore</h1></Link> </div>
       <div className="right">
       <div className="rightlink"> 
       <Link to="/">Homepage</Link> 
       </div>
       <div className="rightlink"> 
       <Link to="/">Contact</Link> 
       </div>
       <div className="rightlink"> 
       <Link to="/">About</Link> 
       </div>
       <div className="rightlink"> 
       <Link to="/">Stores</Link> 
       </div>
       <div className="rightlink-icon"> 
       <div className='list'>
      <SearchIcon className='searchicon'/>
        <Person2OutlinedIcon className='person'/>
   <FavoriteBorderOutlinedIcon className='favourite'/>
   </div>
       <div className='carticon' onClick={()=>{setisopen(!isopen)}}>
       <ShoppingCartOutlinedIcon/>
       <span>{products.length}</span>
       </div>
       </div>
 <div className='menu'> <MenuIcon /></div>
        </div> 
        </div>
      {isopen && <Cart/>}
    </div> 
   
    );
}
 
export default Navbar;