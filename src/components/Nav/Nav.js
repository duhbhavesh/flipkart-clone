import React from 'react';
import './Nav.css';

export default function Nav() {
   return (
      <div className='container-nav'>
         <nav className='navbar navbar-md'>
            <a className='navbar-brand navbar-link nav-item-link' href='#'>
               Flipkart
            </a>
            <ul className='nav-items'>
               <li className='nav-item navbar-link'>
                  <a href='#' className='nav-item-link'>
                     Products
                  </a>
               </li>
            </ul>

            <ul className='nav-items'>
               <li className='nav-item navbar-link'>
                  <a className='nav-item-link'>
                     <i className='fas fa-heart'></i>
                  </a>
               </li>
               <li className='nav-item navbar-link'>
                  <a className='nav-item-link'>
                     <i className='fas fa-shopping-cart'></i>
                  </a>
               </li>
               <li className='nav-item navbar-link'>
                  <a className='nav-item-link'>
                     <i className='fas fa-user'></i>
                  </a>
               </li>
            </ul>
         </nav>
      </div>
   );
}
