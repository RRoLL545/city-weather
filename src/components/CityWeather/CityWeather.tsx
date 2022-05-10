import { CityAdvancedData } from "../../interfaces/CityWeatherData"
import { WeatherIconStyled } from "../WeatherIcon/WeatherIcon.styles"
import { CityWeatherStyled } from "./CityWeather.styles"

/**
 * Возвращает элемент для отображения дополнительных данных о текущей погоде в выбранном городе
 * @param props обект с данными для отображения
 * @returns элемент для отображения дополнительных данных о текущей погоде в выбранном городе
 */
const CityWeather = (props: CityAdvancedData): JSX.Element => {
  const {
    humidity, 
    precipitationChance, 
    temperature, 
    weatherIconUrl, 
    windSpeed
  } = props;
  
  return (
    <CityWeatherStyled>
      <span>{temperature}</span>
      <WeatherIconStyled url={weatherIconUrl} height={'57px'} width={'82px'}/>
      <ul>
        <li>Вероятность осадков: <span>{precipitationChance}</span></li>
        <li>Влажность: <span>{humidity}</span></li>
        <li>Ветер: <span>{windSpeed}</span></li>
      </ul>
    </CityWeatherStyled>
  )
}

export default CityWeather