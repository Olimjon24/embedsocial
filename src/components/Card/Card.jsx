import '../Card/Card.css'
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card_img" />
      <h3 className='card_title'>{title}</h3>
      <p className='card_desc'>{description}</p>
    </div>
  );
};


export default Card;
