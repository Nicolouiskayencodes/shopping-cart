import PropTypes from "prop-types";
import styles from "../styles/cart.module.css"
export default function Cart({items, func}){
  let total = 0;
  items.forEach(item => {
    let quantity = item.quantity;
    let price = item.item.price;
    total += (quantity * price)
  });
  return(
    <div>
      <h1 className={styles.title}>Shopping Cart</h1>
      {items.map(item=><div key={item.key} >
        <img src={item.item.image} />
        <p>{item.item.title}</p>
        <p>x{item.quantity}</p>
        <p>${item.item.price}</p>
        <button onClick={()=>func(item)}>X</button>
      </div>)}
      {items.length>0 && <h2>Total: ${total}</h2>}
      {items.length>0 && <button onClick={()=>alert("Purchase functionality not included")}>Purchase</button>}
      {items.length===0 && <p>Your cart is empty!</p>}
    </div>
  )
}

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  func: PropTypes.func,
}