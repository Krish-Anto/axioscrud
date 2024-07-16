import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from './global';

// const APIdata = "https://668a812d2c68eaf3211cfb8e.mockapi.io/products"

export const ProductDetails = () => {

    const {id} = useParams();

    const [product,setProduct] = useState({})

    const Prodget = ()=>{
      fetch(`${API}/${id}`,{method : "GET"})
        .then((res)=>res.json())
        .then((data)=> setProduct(data))
    }

    useEffect(()=>{
      Prodget()
    },[])


  return (
    <div>ProductDetails - {product.name}-{id}</div>
  )
}
