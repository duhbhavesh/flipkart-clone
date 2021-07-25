import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function ProductsListing() {
   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <Sidebar />
            </div>
            <div className='wrapper-products'></div>
         </div>
      </>
   );
}
