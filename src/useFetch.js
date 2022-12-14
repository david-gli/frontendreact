import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (url) => {
            const [error, seterror] = useState(null)
            const [data, setdata] = useState([])
            const [isloading, setisloading] = useState(true)

    useEffect(() => {
        const fetchData = async ()=>{
           try{
               const data =await axios.get(process.env.REACT_APP_API_URL + url,
               {
              headers: {
                Authorization: " bearer " + process.env.REACT_APP_API_TOKEN
               
                },
               }
               );
               setisloading(false)
               setdata(data.data.data);
             
           }catch(err){
            
              seterror(err)
              
           }

        };
       fetchData();
      
      
    }, [url]);
    return {data, isloading, error};
}
 
export default useFetch;