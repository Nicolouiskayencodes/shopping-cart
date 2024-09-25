import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div>
  <Link to={'/'} >Home</Link>
  <hr></hr>
  <Link to={'/shopping'} >Shop</Link>
  </div>
  )
}