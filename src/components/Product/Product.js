import React from 'react';
import './Product.css';

export default function Product({ product }) {
   return (
      <>
         <div className='card product product-card'>
            <div className='product-image'>
               <img className='card-img' src={product.image} alt='' />
            </div>
            <div className='product-details'>
               <h3 className='product-heading'>{product.name}</h3>
               <div className='rating'>
                  <span>
                     <i className='fas fa-star'></i>
                  </span>
                  <span>
                     <strong>{product.ratings}</strong>/5.0
                  </span>
               </div>
            </div>
            <div className='product-details'>
               <div className='product-price'>
                  <p className='new-price'>₹{product.price}</p>
               </div>
            </div>
         </div>
      </>
   );
}
