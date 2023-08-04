import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Country = ({
  name, flag, onClick, capital, lat, lng, index,
}) => (
  <div className={[1, 2].includes(index % 4) ? 'light-bg col p-0 country-box' : 'col p-0 country-box'}>
    <NavLink to={`/details/${name}`} onClick={() => onClick(name)} className="text-decoration-none text-light">
      <div className="country container p-4">
        <div className="row">
          <div className="col-12">
            <h3 className="country-name h1">{name}</h3>
            <p className="capital-name">{capital}</p>
          </div>
          <div className="col-12 d-flex flag-box text-end">
            <img
              src={flag}
              alt=""
              className="flag img-thumbnail border border-danger"
            />
            <div className="d-flex flex-column align-items-start justify-content-center ms-3">
              <p className="h5">{lat}</p>
              <p className="h5">{lng}</p>
            </div>
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
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Country;
