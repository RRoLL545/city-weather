import { useRef, useState } from "react";
import { WEATHER_FORECAST_BASIC_API_URL } from "../../config/config";
import { InputCityStyled } from "./InputCity.styles"

const InputCity = () => {
  const [cityName, setCityName] = useState('');
  const cityNameInputValue = useRef<HTMLInputElement>(null);

  /**
   * Обработчик нажатия клавиш
   * @param e событие нажатия клавиши
   */
  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && cityName) {
      getWeatherData(cityName);
    }
  }

  /**
   * Обработчик ввода в форму
   * @param e событие формы
   */
  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setCityName(e.currentTarget.value);
  }
  
  /**
   * Запрашивает данные о погоде в городе с последующей записью результата в хранилище 
   * @param name - название города
   */
  const getWeatherData = async (name: string): Promise<void> => {
    try {
      const response = await fetch(WEATHER_FORECAST_BASIC_API_URL + name + '&days=3')
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <InputCityStyled 
      placeholder='Выбрать город' 
      onKeyDown={keyPressHandler} 
      ref={cityNameInputValue} 
      onChange={inputHandler}
    />
  )
}

export default InputCity
