import { WeatherIconStyled } from "../WeatherIcon/WeatherIcon.styles"
import { CityWeatherStyled } from "./CityWeather.styles"

const CityWeather = () => {
  return (
    <CityWeatherStyled>
      <span>{`+6`}</span>
      <WeatherIconStyled />
      <ul>
        <li>Вероятность осадков:<span>{` 0%`}</span></li>
        <li>Влажность:<span>{` 48%`}</span></li>
        <li>Ветер:<span>{` 5 м/с`}</span></li>
      </ul>
    </CityWeatherStyled>
  )
}

export default CityWeather