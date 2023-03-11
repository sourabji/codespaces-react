import { ShoppingBag, ShoppingCart, ShoppingCartSimple } from 'phosphor-react'
import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
export const Header = (props) => {
  const{countCartItems}=props
  return (
    <div className='navbar'>
        <div className='links'>
        <Link to='/'>Product</Link>
         <Link to='/basket'>
<>
<ShoppingCartSimple size={40}/>{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}

</>

         </Link>
        </div>
    </div>
  )
}
