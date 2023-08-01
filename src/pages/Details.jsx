import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { SpringSpinner } from 'react-epic-spinners';
import { getWeather } from '../redux/weather/weatherSlice';
import State from '../components/State';

const Details = () => {
  const states = useSelector((store) => store.countryStates.countryStates);
  const details = useSelector((store) => store.weather.weatherDetails);
  const isLoading = useSelector((store) => store.weather.isLoading);
  console.log(states);
  const dispatch = useDispatch();

  useEffect(() => {
    states.forEach((state) => {
      dispatch(getWeather(state.name));
    });
  }, [dispatch, states]);

  if (states.hasError) {
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <h2 className="text-danger">Something went wrong</h2>
      </div>
    );
  }

  return (
    <div className="container flex-grow-1 d-flex flex-column justify-content-center">
      {isLoading ? (
        <div className="container d-flex justify-content-center align-items-center">
          <SpringSpinner size={60} color="#333" />
        </div>
      ) : (
        details.map((state) => (
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
