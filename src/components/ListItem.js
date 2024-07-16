import React, { useContext, useEffect, useState } from 'react'
import { ItemData } from './ItemData'
import { API } from './global'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../App.css'
import IconButton from '@mui/material/IconButton';
import { contextdata } from './ContextProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const ListItem = () => {

  const navigate = useNavigate()
  const [products] = useContext(contextdata);
  const [productList,setProductList] = useState(products)
  
 console.log(productList);
  

  const getProducts = async () => {

    const response = await axios.get(`${API}`, {method : "GET"});  
    console.log(response.data)
    setProductList(response.data)

  //  fetch(`${APIdata1}`, {method : "GET"})
  // .then((res)=> res.json())
  // .then((data)=>setProductList(data))
   
}

useEffect(()=> {getProducts()},[])

  

  // const [data,setData] = useState([])

  // const [user,getItems] = useContext(contextdata)

  //  console.log(user)

// const fetchData = ()=>{
//   fetch(`${API}`,{method : "GET"})
//   .then((res)=>res.json())
//   .then((data)=>setData(data))
// }

// useEffect(()=>{
//    try{
//     fetchData()
//    }
//    catch {
//       console.error("Error fetching data")
//    } 
// },[])



  return (
    <div className = 'pdlist'>
        {productList.map((pd,index)=>(
          <ItemData key={index} product={pd} id = {pd.id}
          deleteIcon={
            <IconButton aria-label="delete" color='secondary'onClick={()=>{
              axios.delete(`${API}/${pd.id}`,{method : "DELETE"})
              .then((response)=>getProducts(response.data))
            }}>
              <DeleteIcon />
            </IconButton>    
        } 
        editIcon={
          <IconButton aria-label="editbtn" color='error'
              onClick={()=>navigate(`/products/edit/${pd.id}`)}>
            <EditIcon/>
          </IconButton>
          } />
        ))}
    </div>
  )
}
