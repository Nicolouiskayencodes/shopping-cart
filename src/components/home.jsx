import checkout from "../assets/checkout.jpg"
import style from "../styles/home.module.css"

export default function Home(){
  return <div className={style.container}>
    <img src={checkout} alt="" className={style.img}/>
   <div className={style.right}>
     
      <p className={style.info}>Welcome to the InterPorium! We are a sell a large assortment of high quality and affordable goods. We source our products from community oriented and environmentally friendly small businesses worldwide! We are dedicated to positive customer experiences and linking buyers and sellers across the globe. If you are interested in getting in contact, email us at interporium@fakebusinessinquiries.net. We hope you like what you see!</p>
      <p className={style.extra}>Photo by <a href="https://unsplash.com/@blakewisz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Blake Wisz</a> on <a href="https://unsplash.com/photos/person-holding-smartphone-beside-tablet-computer-Xn5FbEM9564?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
      <div className={style.extra}>InterPorium™ nicolouiskayencodes 2024</div>
   </div>
  </div>
}