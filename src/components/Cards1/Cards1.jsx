import Card from '../Card/Card.jsx'
import { cardData } from "../../db.js";
export default function Cards1(){
    return (
      <div className="cards1">
        <div className="container cards-content">
          <div className="cards_info">
            <h1>
              Let your story live <span>more than 24h.</span>
            </h1>
            <p>
              You've worked hard to create a beautiful Instagram story but it
              disappears in 24 hours? No worries, use our story saver for
              Instagram to bring them to life on your website.
            </p>
          </div>
          <div className="cards_item">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    );
} 