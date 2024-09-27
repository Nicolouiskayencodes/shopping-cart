import { useState } from "react";
import PropTypes from "prop-types"
import ItemCard from "./itemcard";
import style from "../styles/shopping.module.css";

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
    {active !== null && <dialog className={style.popup} open>
      <div className={style.item}>
        <button type="button" onClick={()=>setActive(null)} className={style.exit}>X</button>
        <img src={active.image} className={style.img}></img>
        <h1 className={style.title}>{active.title}</h1>
        <p className={style.description}>{active.description}</p>
        <p>${active.price}</p>
        <form className={style.form}>
          <label>Quantity:<input id="quantity" type="number" defaultValue={1}></input></label>
          <button type="button" onClick={()=>setActive(null)} className={style.formbutton}>Cancel</button>
          <button type="button" onClick={addCart} className={style.formbutton}>Add to Cart</button>
        </form>
      </div>
      </dialog>}
    <div className={style.container}>{items.map(item => <button key={item.id} onClick={()=>{setActive(item)}} className={style.btn}> <ItemCard props={item} /></button> )}</div>
  </div>
}

Shopping.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object),
  add: PropTypes.func,
}