import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../redux/countries/countriesSlice';
import Country from '../components/country';
import { getCountryStates } from '../redux/countries/statesSlice';
import Search from '../components/Search';

const Home = () => {
  const dispatch = useDispatch();

  const handleClick = (country) => {
    dispatch(getCountryStates(country));
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const countries = useSelector((store) => store.countries.countries);
  return (
    <main className="container container-md-fluid">
      <Search />
      <div className="container-fluid country-container">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
          {countries.map((country, i) => (
            <Country
              key={country.name}
              name={country.name}
              flag={country.flag}
              capital={country.capital[0]}
              lat={country.latlng[0]}
              lng={country.latlng[1]}
              onClick={handleClick}
              index={i}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
