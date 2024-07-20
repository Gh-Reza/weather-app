import { NavLink, useLocation } from 'react-router-dom';
import Icon from '../assets/icon.png';
import BackIcon from '../assets/icon50.png';

const Header = () => {
  const location = useLocation();
  const isDetailsPage = location.pathname.startsWith('/details/');
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const day = String(currentDate.getDate()).padStart(2, '0');
  const fullDate = `${year}, ${month} ${day}`;

  return (
    <header className="header text-white d-flex justify-content-between align-items-center">
      <div className="d-flex">
        {isDetailsPage && <NavLink to="/"><img src={BackIcon} alt="Back icon" className="back-icon" /></NavLink> }
        <p className="h2">{fullDate}</p>
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
