import { CityStyled } from "./City.styles"

const City = (): JSX.Element => {
  return (
    <CityStyled>
      <h2>Тольятти</h2>
      <div>{`Понедельник, 20:00`}</div>
      <div>{`Переменная облачность`}</div>
    </CityStyled>
  )
}

export default City