import { Link } from 'react-router-dom';
const Categories = () => {
    return (
        <div className="categories">
            <div className="grid">
                <div className="box1"><img className='boximage' src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /> <Link to="/products/1"><button className="button"> SALES</button></Link>  </div>
                <div className="box2"><img className='boximage'  src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /> <Link to="/products/1"><button className="nbutton"> NEW SEASON</button></Link></div>
                <div className="box3"><img className='boximage'  src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /> <Link to="/products/1"><button className="button"> WOMEN</button></Link></div>
                <div className="box4"><img className='boximage'  src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /> <Link to="/products/1"><button className="button">MEN</button></Link></div>
                <div className="box5"><img className='boximage'  src= "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /> <Link to="/products/1"><button className="button"> ACCESSORIES</button></Link></div>
                <div className="box6"><img className='boximage'  src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /> <Link to="/products/1"><button className="button"> SHOES</button></Link></div>
            </div>
        </div>
      );
}
 
export default Categories;