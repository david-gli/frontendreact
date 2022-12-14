import Card from "./Card";
import useFetch from "./useFetch";
const Featured = ({ type }) => {
   
   const {data, isloading, error} = useFetch(`/products?populate=*&[filters] [type] [$eq]=${type}`)
   
    return ( 
    <div className="features">
        <div className="topfeature">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem repellat beatae vel incidunt neque doloribus asperiores iure, optio debitis perferendis iusto tenetur sequi officiis quidem amet saepe cupiditate ullam?</p>
        </div>
     
    
        <div className="bottomfeature">
            {error? "error":
            isloading? "loading" :data.map(item=>(
                <Card item ={item} key={item.id}/>
            ))}
        </div>
  
    </div>
     );
}
 
export default Featured;

