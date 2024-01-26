import { Link } from 'react-router-dom';
import restaurantFoodImage from '../../../assets/home/restaurant-food.jpg';
import './HeroSection.css';
import routes from '../../../utils/routes';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container grid">
        <div className="hero-section-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, 
            focused on traditional recipes served with a modern twist.
          </p>
          <Link className="button-primary" to={routes.bookings.path}>
            Reserve a table
          </Link>
        </div>
        <img 
          className="hero-section-image" 
          src={restaurantFoodImage} 
          alt="Restaurant food" 
        />
      </div>
    </section>
  );
};

export default Hero;
