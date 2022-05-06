import City from './components/City/City';
import CityWeather from './components/CityWeather/CityWeather';
import InputCity from './components/InputCity/InputCity';
import { WeatherAppWrapper, StyledHeader, StyledMain } from './components/styles/WeatherAppWrapper.styles'
import WeatherForecastList from './components/WeatherForecastList/WeatherForecastList';

const WeatherApp = (): JSX.Element => {
  return (
    <WeatherAppWrapper>
      <StyledHeader>
        <City />
        <CityWeather />
        <InputCity />
      </StyledHeader>
      <StyledMain>
        <h2>{`Прогноз на ${'10'} дней`}</h2>
        <WeatherForecastList />
      </StyledMain>
    </WeatherAppWrapper>
  );
}

export default WeatherApp;
