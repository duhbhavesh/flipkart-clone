import React from 'react';
import { useData } from '../../context/DataContext';
import { brands, categories, sizes } from '../../data/data';
import './Sidebar.css';

export default function Sidebar() {
   const { state, dispatch } = useData();
   const { sortBy } = state;

   const handleSize = (size) => {
      if (state.size.includes(size)) {
         dispatch({ type: 'REMOVE_SIZE', payload: size });
      } else {
         dispatch({ type: 'SET_SIZE', payload: size });
      }
   };

   const handleBrand = (brand) => {
      if (state.brand.includes(brand)) {
         dispatch({ type: 'REMOVE_BRAND', payload: brand });
      } else {
         dispatch({ type: 'SET_BRAND', payload: brand });
      }
   };

   const handleCategory = (category) => {
      if (state.categories.includes(category)) {
         dispatch({ type: 'REMOVE_CATEGORY', payload: category });
      } else {
         dispatch({ type: 'SET_CATEGORY', payload: category });
      }
   };

   return (
      <>
         <aside className='filter-md'>
            <div className='filter'>
               <p className='filter-title'>Sort By</p>
               <div className='filter-inputs'>
                  <div className='filter-input'>
                     <input
                        onClick={() =>
                           dispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' })
                        }
                        name='sort-md'
                        type='radio'
                        defaultChecked={sortBy && sortBy === 'LOW_TO_HIGH'}
                        className='filter-input-radio'
                     />
                     Price - Low to High
                  </div>
                  <div className='filter-input'>
                     <input
                        onClick={() =>
                           dispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' })
                        }
                        name='sort-md'
                        type='radio'
                        defaultChecked={sortBy && sortBy === 'HIGH_TO_LOW'}
                        className='filter-input-radio'
                     />
                     Price - High to Low
                  </div>
               </div>
            </div>

            <div className='filter'>
               <p className='filter-title'>Sizes</p>

               <div className='filter-inputs'>
                  {sizes.map((size) => {
                     return (
                        <div className='filter-input'>
                           <input
                              onChange={() => handleSize(size)}
                              checked={state.size.includes(size)}
                              name='filter-md'
                              type='checkbox'
                              className='filter-input-check'
                           />
                           {size}
                        </div>
                     );
                  })}
               </div>
            </div>

            <div className='filter'>
               <p className='filter-title'>Brand</p>
               <div className='filter-inputs'>
                  {brands.map((brand) => {
                     return (
                        <div className='filter-input'>
                           <input
                              onChange={() => handleBrand(brand)}
                              checked={state.brand.includes(brand)}
                              name='filter-md'
                              type='checkbox'
                              className='filter-input-check'
                           />
                           {brand}
                        </div>
                     );
                  })}
               </div>
            </div>

            <div className='filter'>
               <p className='filter-title'>Ideal For</p>
               <div className='filter-inputs'>
                  {categories.map((category) => {
                     return (
                        <div className='filter-input'>
                           <input
                              onChange={() => handleCategory(category)}
                              checked={state.categories.includes(category)}
                              name='filter-md'
                              type='checkbox'
                              className='filter-input-check'
                           />
                           {category}
                        </div>
                     );
                  })}
               </div>
            </div>
         </aside>
      </>
   );
}
