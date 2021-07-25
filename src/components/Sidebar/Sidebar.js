import React from 'react';
import { useData } from '../../context/DataContext';
import './Sidebar.css';

export default function Sidebar() {
   const {
      state: { sortBy },
      dispatch,
   } = useData();

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
                  <div className='filter-input'>
                     <input
                        name='filter-md'
                        type='checkbox'
                        className='filter-input-check'
                     />
                     S
                  </div>
                  <div className='filter-input'>
                     <input
                        name='filter-md'
                        type='checkbox'
                        className='filter-input-check'
                     />
                     M
                  </div>
                  <div className='filter-input'>
                     <input
                        name='filter-md'
                        type='checkbox'
                        className='filter-input-check'
                     />
                     L
                  </div>
                  <div className='filter-input'>
                     <input
                        name='filter-md'
                        type='checkbox'
                        className='filter-input-check'
                     />
                     XL
                  </div>
               </div>
            </div>

            <div className='filter'>
               <p className='filter-title'>Brand</p>
               <div className='filter-inputs'>
                  <div className='filter-input'>
                     <input
                        name='filter-md'
                        type='checkbox'
                        className='filter-input-check'
                     />
                     Brand 1
                  </div>
                  <div className='filter-input'>
                     <input
                        name='filter-md'
                        type='checkbox'
                        className='filter-input-check'
                     />
                     Brand 2
                  </div>
                  <div className='filter-input'>
                     <input
                        name='filter-md'
                        type='checkbox'
                        className='filter-input-check'
                     />
                     Brand 3
                  </div>
                  <div className='filter-input'>
                     <input
                        name='filter-md'
                        type='checkbox'
                        className='filter-input-check'
                     />
                     Brand 4
                  </div>
               </div>
            </div>

            <div className='filter'>
               <p className='filter-title'>Ideal For</p>
               <div className='filter-inputs'>
                  <div className='filter-input'>
                     <input
                        name='filter-md'
                        type='checkbox'
                        className='filter-input-check'
                     />
                     Men
                  </div>
                  <div className='filter-input'>
                     <input
                        name='filter-md'
                        type='checkbox'
                        className='filter-input-check'
                     />
                     Women
                  </div>
                  <div className='filter-input'>
                     <input
                        name='filter-md'
                        type='checkbox'
                        className='filter-input-check'
                     />
                     Kids
                  </div>
               </div>
            </div>
         </aside>
      </>
   );
}
