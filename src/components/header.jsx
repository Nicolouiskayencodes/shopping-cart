import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import cartLogo from "../assets/cart-variant.svg"
import style from "../styles/header.module.css"
import { useState } from "react"
export default function Header({itemsTotal}) {
  const [active, setActive] = useState('/');
  return (
    <div className={style.header}>
      <h1 className={style.title}>InterPorium</h1>
      <div className={style.nav}>
        {active === '/' ? <Link to={'/'} className={style.active}>Home</Link> : <Link to={'/'} onClick={()=>setActive('/')}>Home</Link>}
        {active === '/shopping' ? <Link to={'/shopping'} className={style.active}>Shop</Link> : <Link to={'/shopping'} onClick={()=>setActive('/shopping')}>Shop</Link>}
        {active === '/cart' ? <Link to={'/cart'} className={style.active}><img src={cartLogo} className={style.img}/> {(itemsTotal > 0) && itemsTotal}</Link> : <Link to={'/cart'} onClick={()=>setActive('/cart')}><img src={cartLogo} className={style.img}/> {(itemsTotal > 0) && itemsTotal}</Link>}
      </div>
  </div>
  )
}

Header.propTypes = {
  itemsTotal: PropTypes.number,
}