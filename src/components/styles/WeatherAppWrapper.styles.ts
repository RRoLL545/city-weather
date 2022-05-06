import styled from 'styled-components'

export const WeatherAppWrapper = styled.div`
  max-width: 1350px;
  height: 800px;
  border-radius: 10px;
  margin: 0 auto;
  overflow: hidden;
`
export const StyledHeader = styled.header`
  height: 404px;
  background-image: url('./assets/img/header-background-image.png'), linear-gradient(180deg, #15143D 0%, #3F3D7D 100%);
  background-size: cover;
  background-repeat: no-repeat;
  color: #FFFFFF;
  border-radius: 10px 10px 0 0;
  position: relative;
  padding-top: 36px;
  box-sizing: border-box;
`
export const  StyledMain = styled.main`
  height: 396px;
  box-sizing: border-box;
  padding: 37px 41px;

  & > h2 {
    margin: 0;
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    color: #000000;
  }
`