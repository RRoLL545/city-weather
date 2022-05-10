import { WeatherIconStyled } from "../WeatherIcon/WeatherIcon.styles";
import { WeatherForecastItemStyled } from "./WeatherForecastItem.styles"

interface Props {
  dayName: string;
  date: string;
  maxTemperature: string;
  minTemperature: string;
  weatherCondition: string;
  weatherIconUrl: string
}


const WeatherForecastItem = (props: Props): JSX.Element => {
  const {
    date,
    dayName,
    maxTemperature,
    minTemperature,
    weatherCondition,
    weatherIconUrl
  } = props;

  return (
    <WeatherForecastItemStyled>
      <h3 style={(dayName === 'Сб' || dayName === 'Вс') ? {color: 'red'} : {color: 'inherit'}}>{dayName}</h3>
      <h4>{date}</h4>
      <WeatherIconStyled url={weatherIconUrl} height={'45px'} width={'65px'}/>
      <ul>
        <li>{maxTemperature}&deg;</li>
        <li>{minTemperature}&deg;</li>
      </ul>
      <span>{weatherCondition}</span>
    </WeatherForecastItemStyled>
  )
}

export default WeatherForecastItem