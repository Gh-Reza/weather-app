import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../redux/countries/countriesSlice';
import Country from '../components/country';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  // store.dispatch(getCountries());

  const countries = useSelector((store) => (store.countries.countries));
  // console.log(countries.name);
  return (
    <main className="container container-md-fluid bg-dark">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
        {countries.map((country) => (
          <Country key={country.name} name={country.name} flag={country.flag} />
        ))}
      </div>
    </main>
  );
};

export default Home;
