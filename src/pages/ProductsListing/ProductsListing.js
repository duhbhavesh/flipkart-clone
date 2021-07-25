import React from 'react';
import Product from '../../components/Product/Product';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useData } from '../../context/DataContext';
import { getSortedData } from '../../utils/utils';
import './ProductsListing.css';

export default function ProductsListing() {
   const {
      state: { products, sortBy },
   } = useData();

   const sortedData = getSortedData(products, sortBy);

   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <Sidebar />
            </div>
            <div className='wrapper-products'>
               <div className='row products'>
                  {sortedData.map((product) => {
                     return <Product product={product} />;
                  })}
               </div>
            </div>
         </div>
      </>
   );
}
