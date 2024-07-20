import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SpringSpinner } from 'react-epic-spinners';
import { getWeather, resetStore } from '../redux/weather/weatherSlice';
import State from '../components/State';
import { getCountryStates } from '../redux/countries/statesSlice';

const Details = () => {
  const states = useSelector((store) => store.countryStates.countryStates);

  const details = useSelector((store) => store.weather.weatherDetails);
  const isLoading = useSelector((store) => store.weather.isLoading);
  const res = [];
  const detailsSet = new Set();

  details.forEach((detail) => {
    if (!detailsSet.has(detail.province) && details.province !== '') {
      res.push(detail);
      detailsSet.add(detail.province);
    }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryStates());
  }, [dispatch]);

  useEffect(() => {
    dispatch(resetStore([]));
    states.forEach((state) => {
      dispatch(getWeather(state.name));
    });
  }, [dispatch, states]);

  if (states.hasError) {
    return (
      <div className="gen container d-flex justify-content-center align-items-center">
        <h2 className="text-danger">Something went wrong</h2>
      </div>
    );
  }

  return (
    <div className="gen container mt-4 flex-grow-1 d-flex flex-column justify-content-center">
      {isLoading ? (
        <div className="container d-flex justify-content-center align-items-center">
          <SpringSpinner size={60} color="#fff" />
        </div>
      ) : (
        res.map((state) => (
          <State
            key={state.id}
            province={state.province}
            icon={state.icon}
            condition={state.condition}
            temp={state.temp}
          />
        ))
      )}
    </div>
  );
};

export default Details;
