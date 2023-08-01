import Icon from '../assets/icon.png';

const Header = () => (
  <header className="header text-white d-flex justify-content-between align-items-center">
    <div className="left">
      <h1 className="fs-1">WeatherAPP</h1>
    </div>
    <div className="right">
      <img src={Icon} alt="" />
    </div>
  </header>
);

export default Header;
