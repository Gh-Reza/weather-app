const Header = () => (
  <header className="bg-dark text-white d-flex justify-content-between p-4 align-items-center">
    <div className="left">
      <h1 className="fs-1">WeatherAPP</h1>
    </div>
    <div className="middle">
      <select name="continents" id="continents" className="form-select">
        <option value="continents">Select the continent</option>
        <option value="asia">Asia</option>
        <option value="africa">Africa</option>
        <option value="north-america">North America</option>
        <option value="south-america">South America</option>
        <option value="europ">Europ</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
    <div className="right">
      <h3>ICON</h3>
    </div>
  </header>
);

export default Header;
