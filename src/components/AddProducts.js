import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import '../App.css'
import { API } from './global'
import { useNavigate } from 'react-router-dom'

const AddProducts = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [poster, setPoster] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    const [summary, setSummary] = useState("")


  return (
    <div className='app-product'>

    <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
    <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
    <TextField id="outlined-basic" label="Price" variant="outlined" onChange={(event) => setPrice(event.target.value)} />
    <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
    <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />    
    <Button variant='contained' color='success'
    onClick={()=>{
       const newProduct ={
            name,
            poster,
            price,
            rating,
            summary
        }
        fetch(`${API}`,{
            method : "POST",
            body : JSON.stringify(newProduct),
            headers : {
             "Content-Type" :   "application/json"
            }

        })
        .then((res)=>res.json())
        .then(()=>navigate("/products"))
    }}
    >Add Product</Button>

    </div>
  )
}

export default AddProducts
