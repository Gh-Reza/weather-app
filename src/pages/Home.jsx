import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../redux/countries/countriesSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  // store.dispatch(getCountries());

  const countries = useSelector((store) => (store.countries.countries));
  // console.log(countries.name);
  return (
    <div className="temp">
      {countries.map((country) => (
        <h1 key={country.name}>{country.name}</h1>
      ))}
    </div>
  );
};

export default Home;
