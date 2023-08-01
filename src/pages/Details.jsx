import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getWeather } from '../redux/weather/weatherSlice';

const Details = () => {
  const states = useSelector((store) => store.countryStates.countryStates);
  const details = useSelector((store) => store.weather.weatherDetails);
  console.log(states);
  const dispatch = useDispatch();

  useEffect(() => {
    states.forEach((state) => {
      dispatch(getWeather(state.name));
    });
  }, [dispatch, states]);

  return (
    <div>
      {details.map((state) => (
        <div key={state.lat} className="d-flex">
          <h2 key={state.lat}>{state.province}</h2>
          <h2 key={state.lat}>{state.condition}</h2>
          <img src={state.icon} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Details;
