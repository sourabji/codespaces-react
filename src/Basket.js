import '/workspaces/codespaces-react/src/Components/Basket.css'


import React from 'react';
import { Minus,Plus } from 'phosphor-react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  
  return (
    <aside className='cart'>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div className='empty'>Cart is empty</div>}
        <div >
        {cartItems.map((item) => (
          <div key={item.id} className="cartItem">
            <img className='img' src={item.image} />
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="btn">
                <Minus/>
              </button>
              <button onClick={() => onAdd(item)} className="btn">
                <Plus/>
              </button>
           {item.qty} x {item.price.toFixed(2)}
            </div>
          </div>
        ))}
        </div>

        {cartItems.length !== 0 && (
          <div className='checkout'>
              <div className='total'>Total : Rs{itemsPrice.toFixed(2)}</div>
        </div>
        )}
      </div>
    </aside>
  );
}