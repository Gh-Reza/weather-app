import { NavLink, useLocation } from 'react-router-dom';
import Icon from '../assets/icon.png';
import BackIcon from '../assets/icon50.png';

const Header = () => {
  const location = useLocation();
  const isDetailsPage = location.pathname.startsWith('/details/');
  return (
    <header className="header text-white d-flex justify-content-between align-items-center">
      <div className="d-flex">
        {isDetailsPage && <NavLink to="/"><img src={BackIcon} alt="Back icon" className="back-icon" /></NavLink> }
        <p className="h2">{new Date().getFullYear()}</p>
      </div>
      <div className="left d-flex align-items-center">
        <h1 className="web-title">WeatherAPP</h1>
      </div>
      <div className="right">
        <img src={Icon} alt="" />
      </div>
    </header>
  );
};

export default Header;
