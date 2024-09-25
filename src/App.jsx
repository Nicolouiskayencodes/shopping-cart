import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import Shopping from './components/shopping'

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
   console.log(cart)

  return (
    <>
      <Header />
      {page === 'shopping' ? (
        (loading && <p>Loading...</p>),
        (error && <p>A network error was encountered</p>),
        (items && <Shopping props={items} add={addCart}/>)
      ): (
        <Home />
      )}
   </>
  )
}

export default App
