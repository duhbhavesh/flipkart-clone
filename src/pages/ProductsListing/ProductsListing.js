import React from 'react';
import Product from '../../components/Product/Product';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useData } from '../../context/DataContext';
import './ProductsListing.css';

export default function ProductsListing() {
   const {
      state: { products },
   } = useData();

   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <Sidebar />
            </div>
            <div className='wrapper-products'>
               <div className='row products'>
                  {products.map((product) => {
                     return <Product product={product} />;
                  })}
               </div>
            </div>
         </div>
      </>
   );
}
