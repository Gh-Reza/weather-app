import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Country = ({ name, flag, onClick }) => (
  <div className="col p-3">
    <NavLink to="/details" onClick={() => onClick(name)}>
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
  onClick: PropTypes.func.isRequired,
};

export default Country;
