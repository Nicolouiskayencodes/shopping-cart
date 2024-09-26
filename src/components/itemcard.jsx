export default function ItemCard(item){
  const image = item.props.image;
  const title = item.props.title;
  const price = item.props.price;

  return <div>
    <img src={image} />
    <h2>{title}</h2>
    <p>${price}</p>
  </div>
}