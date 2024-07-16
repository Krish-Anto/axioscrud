import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';

export const ItemData = ({product,id,deleteIcon,editIcon}) => {
   
  const [show, setShow] = useState(true);

     const navigate = useNavigate()
    
  return (
    <div className="product-container">
      <img className="product-image" src={product.poster} alt={product.name} />
      <div className="product-spec">
        <h1 className="product-name">
          {product.name} - {id}
        </h1>
        <p className="product-rating">⭐{product.rating}</p>
      </div>
      <IconButton
        aria-label="toggleBtn"
        color="primary"
        onClick={() => setShow(!show)}
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {/* <button onClick={()=>navigate("/p/"+ id)}>Info</button> */}
      {show ? <p className="product-summary">{product.summary}</p> : ""}

      <IconButton
        aria-label="toggleBtn"
        color="primary"
        onClick={() => navigate("/products/" + id)}
      >
        <InfoIcon />
      </IconButton>

      <div className="price-align">
        <p className="product-price">Price - Rs.{product.price}</p>
        <Button color="success" variant="outlined">Add to Cart</Button>
      </div>
      <div>{deleteIcon} {editIcon} </div>
      
    </div>
  )
}
