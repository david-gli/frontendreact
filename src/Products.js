import {useParams} from 'react-router-dom'
import useFetch from './useFetch';
import { useState } from 'react';
import List from "./List";

const Products = () => {
    const catid = parseInt(useParams().id) 
   const [maxprice, setmaxprice] = useState(1000);
   const [sort, setsort] = useState(null);
   
   const {data} = useFetch(`/sub-categories?[filters] [categories] [id] [$eq]=${catid}`)
    const [subcatergory, setsubcatergory] = useState([]);

          const handlechange = (e) =>{
            const value = e.target.value
            const ischecked = e.target.checked

            setsubcatergory(ischecked? [...subcatergory, value]: subcatergory.filter(item=>item !== value))
           
          }
         
    return ( 
    <div className="products">
         <div className="productsleft">
            <div className="productcatergories">
                <h1>Product Catergories</h1>
            {data.map((item)=>(
                <div key={item.id}>
                <input type="checkbox" id={item.id} value={item.id} onChange={handlechange}/>
                <label htmlFor="1">{item.attributes.title}</label>
                <br />
            </div>
            ))}
                
            </div>
            <div className="productfilter">
            <h1>Fliter by price</h1>
            <div>
            <span>0</span><input type="range" min={0} max={1000} onChange={(e)=>setmaxprice(e.target.value)} /><span>{maxprice}</span>
            </div>
            </div>
            <div className="productsort">
            <h1>Sort by</h1>
                <div>
                    <input type="radio" id="asc" value="asc" name="price" onChange={e=>setsort("asc")} /><label htmlFor="asc"> price(lowest first)</label>
                    <br />
                    </div>
                   <div>
                    <input type="radio" id="desc" value="desc" name="price" onChange={e=>setsort("desc")} /><label htmlFor="desc"> price(Highest first)</label>
                </div>
            </div>
         </div>
         <div className="productsright">
         
            <img src="https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <List maxprice={maxprice} sort={sort} catid={catid} subcatergory={subcatergory}/>
         </div>
    </div> 
        );
}
 
export default Products;