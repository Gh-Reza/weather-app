import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../redux/countries/countriesSlice';
import Country from '../components/country';
import { getCountryStates } from '../redux/countries/statesSlice';

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
    <main className="gen container container-md-fluid">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
        {countries.map((country) => (
          <Country
            key={country.name}
            name={country.name}
            flag={country.flag}
            capital={country.capital}
            onClick={handleClick}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
