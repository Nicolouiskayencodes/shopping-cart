import style from "../styles/itemcard.module.css"
export default function ItemCard(item){
  const image = item.props.image;
  const title = item.props.title;
  const price = item.props.price;

  return <div className={style.card}>
    <img src={image} className={style.img}/>
    <h2 className={style.name}>{title}</h2>
    <p className={style.price}>${price}</p>
  </div>
}