import City from './components/City/City';
import CityWeather from './components/CityWeather/CityWeather';
import InputCity from './components/InputCity/InputCity';
import { WeatherAppWrapper, StyledHeader, StyledMain } from './components/styles/WeatherAppWrapper.styles'
import WeatherForecastList from './components/WeatherForecastList/WeatherForecastList';
import { FORECAST_DAYS_COUNT } from './config/config';
import { useAppSelector } from './hooks/redux'; 

const WeatherApp = (): JSX.Element => {
  const {errorMessage, isError, isLoading, weatherData} = useAppSelector(state => state.weatherForecastReducer);
  
  return (
    <WeatherAppWrapper>
      <StyledHeader>
        {!weatherData?.forecast && <h3 style={{marginLeft: '20px'}}>Выберите город и нажмите Enter</h3>}
        {isLoading && <h3 style={{marginLeft: '20px'}}>Данные загружаются, подождите...</h3>}
        {isError && <h3 style={{marginLeft: '20px'}}>{errorMessage}</h3>}
        {weatherData?.current && !isError && <City
          day={weatherData?.current.dayName || '-'}
          name={weatherData?.current.cityName || '-'} 
          time={weatherData?.current.time || '-'}
          weather={weatherData?.current.weatherConditionText || '-'}
        />}
        {weatherData?.current && !isError && <CityWeather 
          humidity={weatherData?.current.humidity || '-'}
          precipitationChance={weatherData?.current.precipitationChance || '-'}
          temperature={weatherData?.current.temperature || '-'}
          weatherIconUrl={weatherData?.current.weatherConditionUrl || '-'}
          windSpeed={weatherData?.current.windSpeed || '-'}
          />}
        <InputCity />
      </StyledHeader>
      <StyledMain>
        <h2>{`Прогноз на ${FORECAST_DAYS_COUNT} ${'дня'}`}</h2>
        {!weatherData?.forecast && !isError && <h3>Нет данных</h3>}
        {weatherData?.forecast && !isError && <WeatherForecastList weatherForecastData={weatherData?.forecast || null}/>}
      </StyledMain>
    </WeatherAppWrapper>
  );
}

export default WeatherApp;
