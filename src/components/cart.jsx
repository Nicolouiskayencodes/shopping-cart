import PropTypes from "prop-types";
import style from "../styles/cart.module.css"
export default function Cart({items, func}){
  let total = 0;
  items.forEach(item => {
    let quantity = item.quantity;
    let price = item.item.price;
    total += (quantity * price)
  });
  return(
    <div className={style.body}>
      <h1 className={style.title}>Shopping Cart</h1>
      {items.map(item=><div key={item.key} className={style.item}>
        <div className={style.frame}><img src={item.item.image} className={style.img}/></div>
        <p className={style.name}>{item.item.title}</p>
        <p>x{item.quantity}</p>
        <p>${item.item.price * item.quantity}</p>
        <button onClick={()=>func(item)} className={style.remove}>X</button>
      </div>)}
      {items.length>0 && <h2 className={style.total}>Total: ${total}</h2>}
      {items.length>0 && <button onClick={()=>alert("Purchase functionality not included")} className={style.purchase}>Purchase</button>}
      {items.length===0 && <p className={style.empty}>Your cart is empty!</p>}
    </div>
  )
}

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  func: PropTypes.func,
}