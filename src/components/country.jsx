import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Country = ({ name, flag }) => (
  <div className="col p-3">
    <NavLink to="/details">
      <div className="bg-light p-2">
        <div className="flag-box">
          <img src={flag} alt="" className="img-fluid" />
        </div>
        <h3>{name}</h3>
      </div>
    </NavLink>
  </div>
);

Country.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Country;
