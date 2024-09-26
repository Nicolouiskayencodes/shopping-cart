import PropTypes from "prop-types";
export default function Cart({items}){
  let total = 0;
  items.forEach(item => {
    let quantity = item.quantity;
    let price = item.item.price;
    total += (quantity * price)
  });
  return(
    <div>
      <h1>Shopping Cart</h1>
      {items.map(item=><div key={item.key} >
        <img src={item.item.image} />
        <p>{item.item.title}</p>
        <p>x{item.quantity}</p>
        <p>${item.item.price}</p>
      </div>)}
      <h2>Total: ${total}</h2>
    </div>
  )
}

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}