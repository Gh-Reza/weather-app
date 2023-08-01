import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getWeather } from '../redux/weather/weatherSlice';
import State from '../components/State';

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
    <div className="container">
      {details.map((state) => (
        <State
          key={state.id}
          province={state.province}
          icon={state.icon}
          condition={state.condition}
          temp={state.temp}
        />
      ))}
    </div>
  );
};

export default Details;
