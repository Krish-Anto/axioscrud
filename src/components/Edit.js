import React, {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import '../App.css'
import { API } from './global';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';


export const Edit = () => {

  const {id} = useParams();

  const [product,setProduct] = useState(null)

  const editItems = async ()=>{
    try{
     const response = await axios.get(`${API}/${id}`,{method : "GET"})
     setProduct(response.data)
    }
    catch(error){
      console.error("Error is :", error)
    }
  }

  useEffect((id)=>{editItems()},[id])

  console.log(product)

  return  product ? <EditForm product = {product}/> : "Loading..."
}


function EditForm({product}){



const navigate = useNavigate() 

const[name,setName] = useState(product.name)
const[poster,setPoster] = useState(product.poster)
const[price,setPrice] = useState(product.price)
const[rating,setRating] = useState(product.rating)
const[summary,setSummary] = useState(product.summary)


  return(
    <div className='app-product'>

    <TextField id="outlined-basic" label="Name" value = {name} variant="outlined" onChange={(event) => setName(event.target.value)} />

    <TextField id="outlined-basic" label="Poster" value = {poster} variant="outlined" onChange={(event) => setPoster(event.target.value)} />

    <TextField id="outlined-basic" label="Price" value = {price} variant="outlined" onChange={(event) => setPrice(event.target.value)} />


    <TextField id="outlined-basic" label="Rating" value = {rating} variant="outlined" onChange={(event) => setRating(event.target.value)} />


    <TextField id="outlined-basic" label="Summary" value = {summary} variant="outlined" onChange={(event) => setSummary(event.target.value)} />


{/* <input type='text' onChange={(e)=>setName(e.target.value)}/>
<input type='text' onChange={(e)=>setPoster(e.target.value)}/>
<input type='text' onChange={(e)=>setPrice(e.target.value)}/>
<input type='text' onChange={(e)=>setRating(e.target.value)}/>
<input type='text' onChange={(e)=>setSummary(e.target.value)}/> */}
<Button variant="contained"
 color='success'
 onClick={()=>{
    const updatedProduct = {
       name,
       poster,
       price,
       rating,
       summary
    }
      //  setProductList([...productList,newProduct])
      //  console.log("newProducts",newProduct)
      //  console.log('productlist',productList)
      fetch(`${API}/${product.id}`,{
        method : "PUT",
        body : JSON.stringify(updatedProduct),
        headers : {
          "Content-Type" : "application/json"
        }
      })
      .then((res)=>res.json())
      .then(()=>navigate("/products"))
      
}}>SAVE</Button>
</div>
  )
}
