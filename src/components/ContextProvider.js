import React, { createContext,useEffect, useState } from 'react'
import { API } from './global'
import axios from 'axios';

const contextdata = createContext();

function ContextProvider({children}) {

const [products,setProducts] = useState([])



// const getItems = () =>{
//     fetch(`${API}`,{method : "GET"})
//     .then((res)=>res.json())
//     .then((data)=>setUser(data))
    
// }


const getItems = async () => {
  try {
    const response = await axios.get(`${API}`);
      setProducts(response.data);
      
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

useEffect(()=>{getItems()},[])

console.log(products)

  return (
    <contextdata.Provider value={[products,getItems]} >
        {children}
    </contextdata.Provider>
  )
}

export {contextdata , ContextProvider } 