
import Categories from "./Categories";
import Contact from "./Contact";
import Featured from "./Featured";
import Slider from "./Slider";

const Home = () => {
    return ( <div className="Home">
       <Slider/>
       <Featured type={"Featured"}/>
       <Categories/>
       <Featured type={"Trending"}/>
       <Contact/>

        </div> );
}
 
export default Home;