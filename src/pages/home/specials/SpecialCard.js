import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './SpecialCard.css';
import routes from '../../../utils/routes';

const Card = ({ meal }) => {
  const { name, image, price, description } = meal;

  return (
    <article className="special-card">
      <div className="special-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="special-card-header">
        <h3>{name}</h3>
        <span>{price}</span>
      </div>
      <div className="special-card-footer">
        <p>{description}</p>
        <Link to={routes.orderOnline.path}>
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </Link>
      </div>
    </article>
  );
};

export default Card;
