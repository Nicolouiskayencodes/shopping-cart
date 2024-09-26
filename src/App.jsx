import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import Shopping from './components/shopping'
import Cart from './components/cart'

function App() {
  const {page} = useParams()
  const [items, setItems] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=20', {mode: 'cors'})
      .then(response=>{ 
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json()})
      .then(response=>setItems(response))
      .catch((error) => setError(error))
      .finally(()=> setLoading(false))
  }, [])
  function addCart(item){
    setCart([...cart, item]);
  }
  function remove(item){
    let array = [...cart]
    array.splice(cart.indexOf(item),1)
    setCart(array)
  }
  let total = 0;
  cart.forEach(item => total += parseInt(item.quantity))

  return (
    <>
      <Header itemsTotal={total}/>
      {page === 'shopping' ? (
        (loading && <p>Loading...</p>),
        (error && <p>A network error was encountered</p>),
        (items && <Shopping props={items} add={addCart}/>)
      ): page === 'cart' ? (
        <Cart items={cart} func={remove}/>
      ):(
        <Home />
      )}
   </>
  )
}

export default App
