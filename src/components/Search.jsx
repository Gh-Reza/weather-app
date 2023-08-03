import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCountryStates } from '../redux/countries/statesSlice';

const Search = () => {
  const countries = useSelector((store) => store.countries.countries);
  // console.log(countries);
  const [inputValue, setInputValue] = useState(countries);
  useEffect(() => {
    setInputValue(countries);
  }, [countries]);
  console.log(inputValue);

  const handleChange = (e) => {
    const typedValue = e.target.value;
    const filtered = countries.filter((country) => country.name
      .toLowerCase().includes(typedValue.toLowerCase()));
    setInputValue(filtered);
  };

  const dispatch = useDispatch();

  const handleClick = (e) => {
    const country = e.target.textContent;
    dispatch(getCountryStates(country));
  };

  const handleFucos = () => {
    const resultElement = document.querySelector('.result-box');
    resultElement.style.display = 'block';
  };

  const handleBlure = () => {
    setTimeout(() => {
      const resultElement = document.querySelector('.result-box');
      if (resultElement) {
        resultElement.style.display = 'none';
      }
    }, 100);
  };

  return (
    <div onBlur={handleBlure} className="search-container">
      <input
        placeholder="Search"
        className="input"
        type="text"
        name=""
        id=""
        onChange={handleChange}
        onFocus={handleFucos}
      />
      <ul className="result-box">
        {inputValue.map((country) => (
          <li key={country.id}>
            <NavLink
              to="/details"
              className="text-white text-decoration-none fs-5"
              onClick={handleClick}
            >
              {country.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
