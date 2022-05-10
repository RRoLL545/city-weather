import { WeatherForecastData } from "../../interfaces/WeatherData"
import WeatherForecastItem from "../WeatherForecastItem/WeatherForecastItem"
import { WeatherForecastListStyled } from "./WeatherForecastList.styles"

interface Props {
  weatherForecastData: WeatherForecastData[] | null
}

/**
 * Возвращает список дней с прогнозом погоды
 * @returns  список дней с прогнозом погоды
 */
const WeatherForecastList = (props: Props): JSX.Element => {
  const {weatherForecastData} = props;

  return (
    <WeatherForecastListStyled>
      {weatherForecastData?.map((day, index) => {
        return (<WeatherForecastItem 
          key={index}
          date={weatherForecastData[index].date}
          dayName={weatherForecastData[index].weekDay}
          maxTemperature={weatherForecastData[index].maxTemperature}
          minTemperature={weatherForecastData[index].minTemperature}
          weatherCondition={weatherForecastData[index].weatherConditionText}
          weatherIconUrl={weatherForecastData[index].weatherConditionUrl}
        />)
      })}
    </WeatherForecastListStyled>
  )
}

export default WeatherForecastList