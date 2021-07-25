import React from 'react';
import Product from '../../components/Product/Product';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useData } from '../../context/DataContext';
import {
   getFilteredBrand,
   getFilteredCategory,
   getFilteredSize,
   getSortedData,
} from '../../utils/utils';
import './ProductsListing.css';

export default function ProductsListing() {
   const {
      state: { products, sortBy, size, brand, categories },
   } = useData();

   const sortedData = getSortedData(products, sortBy);
   const filteredBySize = getFilteredSize(sortedData, size);
   const filteredByBrand = getFilteredBrand(filteredBySize, brand);
   const filteredByCategory = getFilteredCategory(filteredByBrand, categories);

   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <Sidebar />
            </div>
            <div className='wrapper-products'>
               <div className='row products'>
                  {filteredByCategory.map((product) => {
                     return <Product product={product} />;
                  })}
               </div>
            </div>
         </div>
      </>
   );
}
