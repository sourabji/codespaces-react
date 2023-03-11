import { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Basket from "./Basket";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import data from "./data";

function App() {
const {products}=data
const [cartItems,setCartItems]=useState([])
const onAdd=(product)=>{
  const exist=cartItems.find((x)=>x.id===product.id)
if(exist){
setCartItems(
  cartItems.map((x)=>x.id===product.id?{...exist,qty:exist.qty+1}:x
  )
)
}else{
setCartItems([...cartItems,{...product,qty:1}])}}


const onRemove=(product)=>{
const exist=cartItems.find((x)=>x.id===product.id)
if(exist.qty==1){
  setCartItems(cartItems.filter((x)=>x.id !== product.id))
}
else{
 setCartItems(
cartItems.map((x)=>x.id===product.id?{...exist,qty:exist.qty-1}:x)

 )

  
}

}
  return (
<div>
<Router>
<Header   countCartItems={cartItems.length} />
<Routes>
<Route path="/header" element={<Header    />} />

<Route path="/" element={<Main onAdd={onAdd} products={products} />} />
<Route path="/basket" element={<Basket
onAdd={onAdd} 
onRemove={onRemove} 
cartItems={cartItems}/>}/> 
</Routes>

</Router>
</div>
  );
}

export default App;
