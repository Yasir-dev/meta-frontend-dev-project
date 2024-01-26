import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Placeholder.css';

const Placeholder = () => {
  return (
    <div className="container placeholder">
      <FontAwesomeIcon icon={faInfoCircle} size="3x" />
      <h2>This is a placeholder</h2>
    </div>
  );
};

export default Placeholder;