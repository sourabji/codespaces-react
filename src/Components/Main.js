import React from 'react'
import "./Main.css"
export const Main = ({products,onAdd}) => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
      <h1>BigMart</h1>
      </div>
      <div className='products'>
{
products.map((product,id)=>(<div className="product" key={product.id}>
  <img src={product.image}/>
  <div className='description'>
    <p>
  <h3>{product.name}</h3>
  </p>
  <h3>Rs{product.price}</h3>
    </div>
    <div><button className='addToCartBttn' onClick={()=>onAdd(product)}>Add to cart</button></div>





</div> 
))


}
</div>
    </div>
  )
}



