// ***** this is for the groceries card component
import { position } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/women.css"

const WomenCard = ({ item ,productData }) => {

  return (
    <div className='single-product' style={{paddingBottom:"100px"}}>
      <Link to={`/WomenProducts/${productData.id}`}>
      <div className='img-box'>
        
  
      <div> 
         <img className='product-img' style={{height:"250px", width:"200px" }} src={item.images.img1} alt="img" />
      </div>
       
      </div>
    
      <div className='title-box' style={{marginTop:"10px" }} >
      <h3 className='product-title'>{item.brandName}</h3>
        <h3 className='product-title'>{item.name}</h3>
      </div>
      <div className='mrp-box' style={{display:"flex", justifyContent:"center", marginTop:"20px" }}>
       
        
         
        <div> <span className='price'>€ {item.price} </span> </div>
        {/* <div><strike className="price">€ {item.mrp} </strike></div>  */}
      </div>
      </Link> 
    </div>
  )
}

export default WomenCard;