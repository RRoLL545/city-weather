import { useRef, useState } from "react";
import { AnyAction } from "redux";
import { useAppDispatch } from "../../hooks/redux";
import { fetchWeatherTest } from "../../stateManagement/slices/ActionCreators";
import { InputCityStyled } from "./InputCity.styles"

const InputCity = () => {
  const [cityName, setCityName] = useState('');
  const cityNameInputValue = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  /**
   * Обработчик нажатия клавиш
   * @param e событие нажатия клавиши
   */
  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && cityName) {
      dispatch(fetchWeatherTest(cityName) as unknown as AnyAction)
    }
  }

  /**
   * Обработчик ввода в форму
   * @param e событие формы
   */
  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setCityName(e.currentTarget.value);
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
