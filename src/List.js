import Card from "./Card";
import useFetch from "./useFetch";
const List = ( {subcatergory ,catid, maxprice, sort}) => {
 
    const {data, isloading, error} = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catid}${subcatergory.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxprice}&Sort=price:${sort}`);
   console.log(data)
   console.log(error)
    return ( 
    <div className="list">
        {error? "error" :isloading? "loading": data.map(item =>(
           <Card item ={item} key={item.id}/>
        ))}
    </div> 
    );
}
 
export default List;