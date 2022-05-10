/**
 * Интерфейс объекта с данными о погоде в выбранном городе
 */
 export interface CityMainData {
  /**
   * Название города
   */
  name: string;

  /**
   * День недели
   */
  day: string;

  /**
   * Время запроса
   */
  time: string;

  /**
   * Погода на время запроса
   */
  weather: string
}

/**
 * Интерфейс объекта с дополнительными данными о погоде в выбранном городе
 */
export interface CityAdvancedData {
  /**
   * Температура
   */
  temperature: string;

  /**
   * Путь до иконки характеризующей погоду
   */
  weatherIconUrl: string;

  /**
   * Шанс выпадения осадков
   */
  precipitationChance: string;

  /**
   * Влажность
   */
  humidity: string;

  /**
   * Скорость ветра
   */
  windSpeed: string
}