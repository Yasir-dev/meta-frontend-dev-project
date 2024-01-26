import {
  faStar,
  faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.css';

const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };

const TestimonialCard = ({ customer }) => {
  const { fullName, image, says } = customer;

  return (
    <article className="card">
      <img src={image} alt={fullName} />
      <h4>{fullName}</h4>
      <span>
        {customer.rating.map((ratingPoint, index) => 
          <FontAwesomeIcon 
            key={index} 
            icon={ratingLevels[ratingPoint]} 
            size="xs" 
          />
        )}
      </span>
      <blockquote><p>"{says}"</p></blockquote>
    </article>
  );
};

export default TestimonialCard;
