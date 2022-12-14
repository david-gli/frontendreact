import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
const Slider = () => {
    const [currentslide, setcurrentslide] = useState(0)
    const prevslide = () => {
        setcurrentslide(currentslide === 0 ? 2 : currentslide - 1)
    }
    const nextslide = () => {
        setcurrentslide(currentslide === 2 ? 0 : currentslide + 1)
    }
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];
    return ( 
    <div className="Slider"> 
       <div className="container" style={{transform : `translateX(-${currentslide * 100}vw)`}}>
        <img src={data[0]} alt="image" />
        <img src={data[1]} alt="image" />
        <img src={data[2]} alt="image" />
       </div>
       <div className="icons">
       
        <div className="lefticon" onClick={prevslide}>
            <ArrowBackIcon/>
            </div>
        <div className="righticon"  onClick={nextslide}>
            <ArrowForwardIcon/>
            </div>
            </div>
       
    </div> 
    );
}
 
export default Slider;