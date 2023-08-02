import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Country = ({
  name, flag, onClick, capital,
}) => (
  <div className="col-7 p-3">
    <NavLink to="/details" onClick={() => onClick(name)} className="text-decoration-none">
      <div className="country container p-4">
        <div className="row">
          <div className="col">
            <h3 className="country-name h1">{name}</h3>
            <p className="capital-name">{capital}</p>
          </div>
          <div className="col-5 flag-box text-end">
            <img
              src={flag}
              alt=""
              className="flag img-thumbnail border border-danger"
            />
          </div>
        </div>
      </div>
    </NavLink>
  </div>
);

Country.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Country;
