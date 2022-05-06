import WeatherIconMini from "../WeatherIconMini/WeatherIconMini"
import { WeatherForecastItemStyled } from "./WeatherForecastItem.styles"

const WeatherForecastItem = () => {
  return (
    <WeatherForecastItemStyled>
      <h3>Сегодня</h3>
      <h4>11 октября</h4>
      <WeatherIconMini />
      <ul>
        <li>+12&deg;</li>
        <li>+4&deg;</li>
      </ul>
      <span>Переменная облачность</span>
    </WeatherForecastItemStyled>
  )
}

export default WeatherForecastItem