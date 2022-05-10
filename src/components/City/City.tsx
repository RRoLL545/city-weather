import { CityMainData } from "../../interfaces/CityWeatherData";
import { CityStyled } from "./City.styles"

/**
 * Возвращает элемент для отображения текущей погоды в выбранном городе
 * @param props обект с данными для отображения
 * @returns элемент для отображения текущей погоды в выбранном городе
 */
const City = (props: CityMainData): JSX.Element => {
  const {day, name, time, weather} = props;

  return (
    <CityStyled>
      <h2>{name}</h2>
      <div>{`${day}, ${time}`}</div>
      <div>{weather}</div>
    </CityStyled>
  )
}

export default City
