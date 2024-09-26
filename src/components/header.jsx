import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import cartLogo from "../assets/cart-variant.svg"
export default function Header({itemsTotal}) {
  return (
    <div>
      <h1>InterPorium</h1>
      <Link to={'/'} >Home</Link>
      <hr></hr>
      <Link to={'/shopping'} >Shop</Link>
      <hr></hr>
      <Link to={'/cart'} ><img src={cartLogo} /> {(itemsTotal > 0) && itemsTotal}</Link>
  </div>
  )
}

Header.propTypes = {
  itemsTotal: PropTypes.number,
}