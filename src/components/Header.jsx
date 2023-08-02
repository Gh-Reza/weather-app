import { NavLink, useLocation } from 'react-router-dom';
import Icon from '../assets/icon.png';
import BackIcon from '../assets/icon50.png';

const Header = () => {
  const location = useLocation();
  const isDetailsPage = location.pathname === '/details';
  return (
    <header className="header text-white d-flex justify-content-between align-items-center">
      <div className="left d-flex align-items-center">
        {isDetailsPage && <NavLink to="/"><img src={BackIcon} alt="Back icon" className="back-icon me-4" /></NavLink> }
        <h1 className="fs-1">WeatherAPP</h1>
      </div>
      <div className="right">
        <img src={Icon} alt="" />
      </div>
    </header>
  );
};

export default Header;
