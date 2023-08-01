import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getWeather } from '../redux/weather/weatherSlice';

const Details = () => {
  const states = useSelector((store) => store.countryStates.countryStates);
  // const details = useSelector((store) => store.weather.weatherDetails);
  console.log(states);
  const dispatch = useDispatch();

  useEffect(() => {
    states.forEach((state) => {
      dispatch(getWeather(state.name));
    });
  });

  return (
    <div>
      {states.map((state) => (
        <h2 key={state.name}>{state.name}</h2>
      ))}
    </div>
  );
};

export default Details;
