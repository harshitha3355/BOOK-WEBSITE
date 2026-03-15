import './BuyCard.css';

function BuyCard({ buy }) {
  return (
    <div className="buy-card">
      <img src={buy.image} alt={buy.name} className="buy-img" />
      <div className='spec'>
        <h2 className="buy-name">{buy.name}</h2>
        <h2 className="buy-categ">by {buy.category}</h2>
        <p className='buy-desc'>{buy.description}</p>
        <h1 className='buy-price'>{buy.price}</h1>
        <p className='rating'>Rating: {buy.rating}</p>
        <a href={buy.link} target="_blank"><button className='buy-btn'> Buy Now</button></a> 
      </div>
    </div>
  );
}

export default BuyCard;
