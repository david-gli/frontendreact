import { Children } from "react";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Products from "./Products";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = () =>{
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  
  )
}
const router = createBrowserRouter(
  [{
       path:"/",
       element:<Layout/>,
       children:[
        {
          path:"/",
          element:<Home/>
        },
        {
      
        path:"/product/:id",
        element:<Product/>
        },
        {
      
          path:"/products/:id",
          element:<Products/>
          }
       ]
  }
 
  

]);
function App() {
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
