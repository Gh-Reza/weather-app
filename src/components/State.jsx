import PropTypes from 'prop-types';

const State = ({
  province, icon, condition, temp,
}) => (
  <div className="d-flex justify-content-between align-items-center p-4 bg-dark text-white mb-3">
    <div>
      <h3>{province}</h3>
    </div>
    <div className="d-flex align-items-center">
      <h3>
        {temp}
        <span>{'\u00b0'}</span>
      </h3>
      <div className="ms-5 text-center">
        <img src={icon} alt="" />
        <p>{condition}</p>
      </div>
    </div>
  </div>
);

export default State;

State.propTypes = {
  province: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
};
