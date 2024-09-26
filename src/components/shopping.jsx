import { useState } from "react";
import PropTypes from "prop-types"
import ItemCard from "./itemcard";

export default function Shopping({props, add}){
  const [active, setActive] = useState(null);
  const items = props
  function addCart(event){
    const quantity = document.querySelector("#quantity").value;
    const item = active;
    const key = crypto.randomUUID();
    event.preventDefault();
    add({item, quantity, key});
    setActive(null);
  }

  return <div>
    {active !== null && <dialog open>
      <img src={active.image}></img>
      <h1>{active.title}</h1>
      <p>{active.description}</p>
      <p>${active.price}</p>
      <form>
        <label>Quantity:<input id="quantity" type="number" defaultValue={1}></input></label>
        <button type="button" onClick={()=>setActive(null)}>Cancel</button>
        <button type="button" onClick={addCart} >Add to Cart</button>
      </form>
      </dialog>}
    {items.map(item => <button key={item.id} onClick={()=>setActive(item)}> <ItemCard props={item} /></button> )}
  </div>
}

Shopping.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object),
  add: PropTypes.func,
}