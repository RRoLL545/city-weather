import WeatherForecastItem from "../WeatherForecastItem/WeatherForecastItem"
import { WeatherForecastListStyled } from "./WeatherForecastList.styles"

const WeatherForecastList = () => {
  return (
    <WeatherForecastListStyled>
      <WeatherForecastItem />
      <WeatherForecastItem />
      <WeatherForecastItem />
    </WeatherForecastListStyled>
  )
}

export default WeatherForecastList